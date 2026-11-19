import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir69hccrk.css';
import '../../css/n/ni12qcbed.css';
import '../../css/z/zpzo9obiz.css';
import '../../css/n/nfkzo2tfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ir69hccrk"/><path class="ni12qcbed"/><path class="zpzo9obiz"/><path class="nfkzo2tfy"/></g>`,
		"fallback": "andrsrxn:file-lock",
	});
}

export default Component;
