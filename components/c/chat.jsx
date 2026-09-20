import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttn8s6hwc.css';
import '../../css/x/xvcg198-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttn8s6hwc"/><path class="xvcg198-u"/></g>`,
		"fallback": "tdesign:chat",
	});
}

export default Component;
