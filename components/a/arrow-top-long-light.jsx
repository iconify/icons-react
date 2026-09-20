import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zidi--btd.css';
import '../../css/y/yfrl7acjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zidi--btd"/><path class="yfrl7acjn"/></g>`,
		"fallback": "lets-icons:arrow-top-long-light",
	});
}

export default Component;
