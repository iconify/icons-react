import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdmgm25pw.css';
import '../../css/z/z7cyubboc.css';
import '../../css/p/po49iib2j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cdmgm25pw"/><path class="z7cyubboc"/><path class="po49iib2j"/></g>`,
		"fallback": "glyphs:clipboard-duo",
	});
}

export default Component;
