import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m286f_qbu.css';
import '../../css/t/tfoblfbjj.css';
import '../../css/g/g6qaqmbhl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m286f_qbu"/><path class="tfoblfbjj"/><path class="g6qaqmbhl"/></g>`,
		"fallback": "glyphs:grin-tongue-squint",
	});
}

export default Component;
