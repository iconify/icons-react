import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxekl0bew.css';
import '../../css/y/yolid685o.css';
import '../../css/t/t-md-bb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxekl0bew"/><path class="yolid685o"/><path class="t-md-bb-e"/></g>`,
		"fallback": "andrsrxn:ball-baseball",
	});
}

export default Component;
