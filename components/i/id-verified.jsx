import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pzxv190ut.css';
import '../../css/x/xuz284bnw.css';
import '../../css/r/rysm2pqae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pzxv190ut"/><circle class="xuz284bnw"/><path class="rysm2pqae"/></g>`,
		"fallback": "hugeicons:id-verified",
	});
}

export default Component;
