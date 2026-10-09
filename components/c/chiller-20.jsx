import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m62_8ratf.css';
import '../../css/y/yax8ykbmj.css';
import '../../css/d/d2ndz6b2q.css';
import '../../css/t/tfcewbbzn.css';
import '../../css/j/jwxgdac6b.css';
import '../../css/v/vxcxjnbsb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m62_8ratf"/><path class="yax8ykbmj"/><path class="d2ndz6b2q"/><path class="tfcewbbzn"/><path class="jwxgdac6b"/><path class="vxcxjnbsb"/>`,
		"fallback": "energy-icons:chiller-20",
	});
}

export default Component;
