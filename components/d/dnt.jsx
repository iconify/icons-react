import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgvu1lb1m.css';
import '../../css/y/ygi38twtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qgvu1lb1m"/><path class="ygi38twtf"/></g>`,
		"fallback": "cryptocurrency-color:dnt",
	});
}

export default Component;
