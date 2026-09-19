import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h-yjfcvrx.css';
import '../../css/z/zag4mw0mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h-yjfcvrx"/><path class="zag4mw0mt"/></g>`,
		"fallback": "hugeicons:bitcoin-money-01",
	});
}

export default Component;
