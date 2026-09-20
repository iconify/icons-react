import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o30632bis.css';
import '../../css/v/vwwgspbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o30632bis"/><path class="vwwgspbbk"/></g>`,
		"fallback": "mage:color-picker",
	});
}

export default Component;
