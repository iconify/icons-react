import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/v/v-fz9-bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="aqhok2bbj"/><path class="v-fz9-bnw"/></g>`,
		"fallback": "hugeicons:atom-01",
	});
}

export default Component;
