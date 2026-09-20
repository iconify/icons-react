import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e36bn8bus.css';
import '../../css/n/nnadpqbsm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e36bn8bus"/><path class="nnadpqbsm"/></g>`,
		"fallback": "streamline:arrow-curvy-up-down-2",
	});
}

export default Component;
