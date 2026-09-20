import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m25d_fb0s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m25d_fb0s"/>`,
		"fallback": "material-icon-theme:chess-light",
	});
}

export default Component;
