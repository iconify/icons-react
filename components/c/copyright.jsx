import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tlpz02qyr.css';
import '../../css/z/zbiy4ln-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="tlpz02qyr"/><path class="zbiy4ln-b"/></g>`,
		"fallback": "charm:copyright",
	});
}

export default Component;
