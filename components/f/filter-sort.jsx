import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mb0epnoxf.css';
import '../../css/h/h2kfwdbij.css';
import '../../css/e/eq0i8xhhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mb0epnoxf"/><path clip-rule="evenodd" class="h2kfwdbij"/><path class="eq0i8xhhy"/></g>`,
		"fallback": "tdesign:filter-sort",
	});
}

export default Component;
