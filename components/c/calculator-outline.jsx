import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2j1lr8fy.css';
import '../../css/k/kb76wyfeg.css';
import '../../css/k/kwz1j7bdg.css';
import '../../css/t/txgz9c5yh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2j1lr8fy"/><path clip-rule="evenodd" class="kb76wyfeg"/><path class="kwz1j7bdg"/><path clip-rule="evenodd" class="txgz9c5yh"/></g>`,
		"fallback": "glyphs:calculator-outline",
	});
}

export default Component;
