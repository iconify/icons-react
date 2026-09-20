import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xy7zocbqo.css';
import '../../css/f/fdfv0tb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="xy7zocbqo"/><path class="fdfv0tb-j"/></g>`,
		"fallback": "reicon:gift4",
	});
}

export default Component;
