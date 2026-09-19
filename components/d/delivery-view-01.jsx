import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/muqwcsbah.css';
import '../../css/w/wx9jn1bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="muqwcsbah"/><path class="wx9jn1bne"/></g>`,
		"fallback": "hugeicons:delivery-view-01",
	});
}

export default Component;
