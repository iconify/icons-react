import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y4vfl7pbh.css';
import '../../css/b/b53ts9b6i.css';
import '../../css/r/rwsx2ebqs.css';
import '../../css/t/tw64mgjcg.css';
import '../../css/t/t4c_f4bmv.css';
import '../../css/k/k96n1u14j.css';
import '../../css/e/ex6-m6bxq.css';
import '../../css/f/fyv9c2frp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="y4vfl7pbh"/><g class="b53ts9b6i"><path class="rwsx2ebqs"/><path class="tw64mgjcg"/><path class="t4c_f4bmv"/><path class="k96n1u14j"/><path class="ex6-m6bxq"/><path class="fyv9c2frp"/></g></g>`,
		"fallback": "cryptocurrency-color:ela",
	});
}

export default Component;
