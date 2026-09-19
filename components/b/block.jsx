import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tlpz02qyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="tlpz02qyr"/><line x1="4.25" x2="12.25" y1="11.75" y2="3.75"/></g>`,
		"fallback": "charm:block",
	});
}

export default Component;
