import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w19id1b_w.css';
import '../../css/k/k-qu04btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w19id1b_w"/><path class="k-qu04btw"/></g>`,
		"fallback": "streamline-ultimate:business-card-1",
	});
}

export default Component;
