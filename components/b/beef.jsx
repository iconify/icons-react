import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o14_xbufx.css';
import '../../css/e/exzyvvbdj.css';
import '../../css/v/vcfahv-hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o14_xbufx"/><path class="exzyvvbdj"/><path class="vcfahv-hr"/></g>`,
		"fallback": "withicons-bauhaus:beef",
	});
}

export default Component;
