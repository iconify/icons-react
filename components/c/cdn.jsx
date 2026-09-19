import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dppfknm_m.css';
import '../../css/u/uypiombnf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dppfknm_m"/><path class="uypiombnf"/></g>`,
		"fallback": "cryptocurrency-color:cdn",
	});
}

export default Component;
