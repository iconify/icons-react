import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kiy9nha1s.css';
import '../../css/u/uzn0bb4xh.css';
import '../../css/e/e4vh_8b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kiy9nha1s"/><path class="uzn0bb4xh"/><path class="e4vh_8b-e"/></g>`,
		"fallback": "iconoir:bicycle",
	});
}

export default Component;
