import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ncyc3xboh.css';
import '../../css/k/kzo_tcbec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ncyc3xboh"/><path class="kzo_tcbec"/></g>`,
		"fallback": "cryptocurrency-color:atm",
	});
}

export default Component;
