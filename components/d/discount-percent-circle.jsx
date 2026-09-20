import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pec_7_bcw.css';
import '../../css/v/v-6c7easu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pec_7_bcw"/><path class="v-6c7easu"/></g>`,
		"fallback": "streamline:discount-percent-circle",
	});
}

export default Component;
