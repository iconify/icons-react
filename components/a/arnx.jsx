import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rml6syxed.css';
import '../../css/p/pv0dl6bjc.css';
import '../../css/r/rrbbmlbwz.css';
import '../../css/u/un6xfgbrp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="rml6syxed"/><path class="pv0dl6bjc"/><path class="rrbbmlbwz"/><path class="un6xfgbrp"/></g>`,
		"fallback": "cryptocurrency-color:arnx",
	});
}

export default Component;
