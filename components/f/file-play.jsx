import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzf1zto4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzf1zto4c"/>`,
		"fallback": "noviair-light:file-play",
	});
}

export default Component;
