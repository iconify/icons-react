import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8ob31epl.css';
import '../../css/r/r_44_2-ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y8ob31epl"/><path class="r_44_2-ul"/></g>`,
		"fallback": "hugeicons:chip",
	});
}

export default Component;
