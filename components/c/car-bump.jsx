import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2wu_ib-c.css';
import '../../css/f/fd2upbc2w.css';
import '../../css/e/eumawzbwv.css';
import '../../css/c/chn_79bzy.css';
import '../../css/p/pi0q-0b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z2wu_ib-c"/><path class="fd2upbc2w"/><path class="eumawzbwv"/><path clip-rule="evenodd" class="chn_79bzy"/><path class="pi0q-0b7m"/></g>`,
		"fallback": "andrsrxn:car-bump",
	});
}

export default Component;
