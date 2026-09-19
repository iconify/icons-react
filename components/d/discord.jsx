import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhrhusb_u.css';
import '../../css/g/gm9kkhhxn.css';
import '../../css/j/je-2a8buv.css';
import '../../css/r/r17x52v8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhrhusb_u"/><path class="gm9kkhhxn"/><path class="je-2a8buv"/><path class="r17x52v8o"/></g>`,
		"fallback": "iconoir:discord",
	});
}

export default Component;
