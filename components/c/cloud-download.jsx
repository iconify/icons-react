import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m1_dqmbhm.css';
import '../../css/m/mcso1ubdd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m1_dqmbhm"/><path class="mcso1ubdd"/></g>`,
		"fallback": "streamline-flex:cloud-download",
	});
}

export default Component;
