import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv1b57v5d.css';
import '../../css/i/in8v79bvl.css';
import '../../css/n/np3a59flj.css';
import '../../css/d/dwk8h8o9s.css';
import '../../css/e/e67jswcqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv1b57v5d"/><path class="in8v79bvl"/><path class="np3a59flj"/><path class="dwk8h8o9s"/><path class="e67jswcqy"/></g>`,
		"fallback": "andrsrxn:film-music",
	});
}

export default Component;
