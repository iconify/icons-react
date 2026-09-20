import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zh-04qb8t.css';
import '../../css/n/n-xhtdrqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zh-04qb8t"/><path class="n-xhtdrqb"/></g>`,
		"fallback": "streamline-sharp-color:camera-setting-pin-flat",
	});
}

export default Component;
