import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uxuqd2bmr.css';
import '../../css/e/endbtwm8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uxuqd2bmr"/><path class="endbtwm8h"/></g>`,
		"fallback": "proicons:candy",
	});
}

export default Component;
