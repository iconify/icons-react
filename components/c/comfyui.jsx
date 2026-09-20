import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-5zy7bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-5zy7bbg"/>`,
		"fallback": "thesvg-color:comfyui",
	});
}

export default Component;
