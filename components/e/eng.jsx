import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/irkrqgmxa.css';
import '../../css/o/oba8g1b-j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="irkrqgmxa"/><path class="oba8g1b-j"/></g>`,
		"fallback": "cryptocurrency-color:eng",
	});
}

export default Component;
