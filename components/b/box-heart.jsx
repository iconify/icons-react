import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zezfrnblj.css';
import '../../css/h/hkqd4ebji.css';
import '../../css/n/nbv29nb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zezfrnblj"/><path class="hkqd4ebji"/><path class="nbv29nb-m"/></g>`,
		"fallback": "andrsrxn:box-heart",
	});
}

export default Component;
