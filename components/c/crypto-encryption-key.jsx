import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yg-_csbbd.css';
import '../../css/u/uf3cs3z-q.css';
import '../../css/x/xggn96_qh.css';
import '../../css/a/ay2291bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yg-_csbbd"/><path class="uf3cs3z-q"/><path class="xggn96_qh"/><path class="ay2291bph"/></g>`,
		"fallback": "streamline-ultimate:crypto-encryption-key",
	});
}

export default Component;
