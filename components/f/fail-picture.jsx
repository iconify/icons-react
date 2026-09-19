import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vr3z2jdqf.css';
import '../../css/f/fa6maxk_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="vr3z2jdqf"/><path class="fa6maxk_h"/></g>`,
		"fallback": "icon-park-outline:fail-picture",
	});
}

export default Component;
