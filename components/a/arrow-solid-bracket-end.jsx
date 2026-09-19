import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz9d1hbuk.css';
import '../../css/f/fa9p88bws.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oz9d1hbuk"/><path class="fa9p88bws"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-end",
	});
}

export default Component;
