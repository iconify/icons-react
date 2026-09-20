import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rmifq8l7r.css';
import '../../css/b/bzj15qgva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rmifq8l7r"/><path class="bzj15qgva"/></g>`,
		"fallback": "mynaui:chart-bubble",
	});
}

export default Component;
