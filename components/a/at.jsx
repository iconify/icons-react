import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xbiz7tboo.css';
import '../../css/f/f4c4xtbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="xbiz7tboo"/><path class="f4c4xtbbq"/></g>`,
		"fallback": "andrsrxn:at",
	});
}

export default Component;
