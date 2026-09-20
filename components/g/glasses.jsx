import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbhxhhbkn.css';
import '../../css/n/n6wlngbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bbhxhhbkn"/><path class="n6wlngbth"/></g>`,
		"fallback": "mynaui:glasses",
	});
}

export default Component;
