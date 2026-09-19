import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzjzudbgr.css';
import '../../css/b/bup5byyxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wzjzudbgr"/><path class="bup5byyxo"/></g>`,
		"fallback": "hugeicons:clothes",
	});
}

export default Component;
