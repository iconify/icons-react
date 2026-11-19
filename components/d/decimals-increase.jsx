import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zmto0objo.css';
import '../../css/t/te_tth4ee.css';
import '../../css/g/gd3-ymw3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zmto0objo"/><path class="te_tth4ee"/><path class="gd3-ymw3v"/></g>`,
		"fallback": "andrsrxn:decimals-increase",
	});
}

export default Component;
