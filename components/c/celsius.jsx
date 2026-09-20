import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hernl_b6r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hernl_b6r"/>`,
		"fallback": "streamline:celsius",
	});
}

export default Component;
