import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ues5j_aln.css';
import '../../css/z/zbcptha7u.css';
import '../../css/q/qcd7zjbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ues5j_aln"/><path class="zbcptha7u"/><path class="qcd7zjbog"/></g>`,
		"fallback": "andrsrxn:hand-maximize",
	});
}

export default Component;
