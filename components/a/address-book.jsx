import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1ztvptby.css';
import '../../css/i/ib1bldbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i1ztvptby"/><path class="ib1bldbbn"/></g>`,
		"fallback": "hugeicons:address-book",
	});
}

export default Component;
