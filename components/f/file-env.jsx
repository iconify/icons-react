import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gzgy9cc9c.css';
import '../../css/f/fzomxmbxj.css';
import '../../css/m/msa89nbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gzgy9cc9c"/><path class="fzomxmbxj"/><path class="msa89nbho"/></g>`,
		"fallback": "andrsrxn:file-env",
	});
}

export default Component;
