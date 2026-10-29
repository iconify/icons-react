import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z88048bib.css';
import '../../css/o/ofeowndyc.css';
import '../../css/l/l2bnabccz.css';
import '../../css/a/a_tly4e8e.css';
import '../../css/p/pjkk_7bql.css';
import '../../css/p/p_p-11brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z88048bib"/><path class="ofeowndyc wm-k"/><path class="l2bnabccz wm-k"/><circle class="a_tly4e8e wm-a"/><path class="pjkk_7bql wm-a"/><path class="p_p-11brz wm-a"/></g>`,
		"fallback": "withicons:accessibility-sketch",
	});
}

export default Component;
