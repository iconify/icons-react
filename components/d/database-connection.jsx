import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ib0bfjs-x.css';
import '../../css/a/agtdgvboj.css';
import '../../css/p/phwb8ebnx.css';
import '../../css/g/gu1jjjtbk.css';
import '../../css/w/wa8a2-4kk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ib0bfjs-x"/><path class="agtdgvboj"/><path class="phwb8ebnx"/><path class="gu1jjjtbk"/><path class="wa8a2-4kk"/></g>`,
		"fallback": "streamline-freehand-color:database-connection",
	});
}

export default Component;
