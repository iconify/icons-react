import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tj0_wqbqu.css';
import '../../css/c/cpkr8u40e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tj0_wqbqu"/><path class="cpkr8u40e"/></g>`,
		"fallback": "streamline:briefcase-dollar",
	});
}

export default Component;
