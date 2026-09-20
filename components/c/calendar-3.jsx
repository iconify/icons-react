import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qlkso8blm.css';
import '../../css/k/kn0ah0b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qlkso8blm"/><path class="kn0ah0b3i"/></g>`,
		"fallback": "mage:calendar-3",
	});
}

export default Component;
