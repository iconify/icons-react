import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/orh13lboo.css';
import '../../css/o/ok7jwlf8w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="orh13lboo"/><path class="ok7jwlf8w"/></g>`,
		"fallback": "charm:camera-video",
	});
}

export default Component;
