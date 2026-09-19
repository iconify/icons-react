import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi-6_qg2a.css';
import '../../css/d/d933btbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi-6_qg2a"/><path class="d933btbqv"/></g>`,
		"fallback": "iconoir:c-square",
	});
}

export default Component;
