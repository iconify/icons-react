import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/enk2hhs4j.css';
import '../../css/v/vunh6hbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="enk2hhs4j"/><path class="vunh6hbwt"/></g>`,
		"fallback": "mage:calendar-check",
	});
}

export default Component;
