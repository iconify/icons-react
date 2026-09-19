import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yx3h8d0-t.css';
import '../../css/t/tlpz02qyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yx3h8d0-t"/><circle class="tlpz02qyr"/></g>`,
		"fallback": "charm:circle-cross",
	});
}

export default Component;
