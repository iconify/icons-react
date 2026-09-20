import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oyjqk5bct.css';
import '../../css/d/dxon-mtqm.css';
import '../../css/o/o6zz0vbkl.css';
import '../../css/m/mzn_blbqr.css';
import '../../css/t/ttk7zkrfj.css';
import '../../css/j/jz2fo-b4g.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oyjqk5bct"/><path class="dxon-mtqm"/><path class="o6zz0vbkl"/><path class="mzn_blbqr"/><path class="ttk7zkrfj"/><path class="jz2fo-b4g"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:gift-linear",
	});
}

export default Component;
