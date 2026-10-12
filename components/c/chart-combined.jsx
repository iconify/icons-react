import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h5v7c-bnz.css';
import '../../css/z/zcukp2pnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h5v7c-bnz"/><path class="zcukp2pnt"/></g>`,
		"fallback": "andrsrxn:chart-combined",
	});
}

export default Component;
