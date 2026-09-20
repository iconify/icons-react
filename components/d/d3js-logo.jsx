import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tphg7kbjn.css';
import '../../css/h/hjk0yxbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tphg7kbjn"/><path class="hjk0yxbae"/></g>`,
		"fallback": "streamline-logos:d3js-logo",
	});
}

export default Component;
