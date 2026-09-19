import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/unzlnruss.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="unzlnruss"/><polyline points="5.75 7.75 8.25 10.25 14.25 3.75"/></g>`,
		"fallback": "charm:circle-tick",
	});
}

export default Component;
