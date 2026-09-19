import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b81ikqy8o.css';
import '../../css/w/wfibe_bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b81ikqy8o"/><path class="wfibe_bma"/></g>`,
		"fallback": "iconoir:glass-fragile",
	});
}

export default Component;
