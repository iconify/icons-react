import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dk47w6wed.css';
import '../../css/n/njbdi345i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dk47w6wed"/><path class="njbdi345i"/></g>`,
		"fallback": "cryptocurrency-color:icx",
	});
}

export default Component;
