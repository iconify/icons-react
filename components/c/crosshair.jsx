import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dq0numbuj.css';
import '../../css/t/tlpz02qyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dq0numbuj"/><circle class="tlpz02qyr"/></g>`,
		"fallback": "charm:crosshair",
	});
}

export default Component;
