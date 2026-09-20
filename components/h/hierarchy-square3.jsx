import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hb8_ulbqy.css';
import '../../css/x/xz50u3btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hb8_ulbqy"/><path class="xz50u3btm"/></g>`,
		"fallback": "reicon:hierarchy-square3",
	});
}

export default Component;
