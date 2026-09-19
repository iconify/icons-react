import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqdlylbqk.css';
import '../../css/i/i-50d2biz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aqdlylbqk"/><path class="i-50d2biz"/></g>`,
		"fallback": "charm:bell",
	});
}

export default Component;
