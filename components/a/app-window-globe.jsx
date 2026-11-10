import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gumqc9euk.css';
import '../../css/o/o72hprbat.css';
import '../../css/s/sh-eo5bhv.css';
import '../../css/n/n9glzw75q.css';
import '../../css/t/t92c_ibzm.css';
import '../../css/c/c0kc3m79n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gumqc9euk"/><ellipse class="o72hprbat"/><path class="sh-eo5bhv"/><path clip-rule="evenodd" class="n9glzw75q"/><path class="t92c_ibzm"/><path class="c0kc3m79n"/></g>`,
		"fallback": "andrsrxn:app-window-globe",
	});
}

export default Component;
