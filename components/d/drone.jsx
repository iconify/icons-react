import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/swj5oi0dy.css';
import '../../css/k/kuwbz0ely.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="swj5oi0dy"/><path class="kuwbz0ely"/></g>`,
		"fallback": "streamline:drone",
	});
}

export default Component;
