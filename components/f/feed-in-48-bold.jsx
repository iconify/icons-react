import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl_of99ub.css';
import '../../css/v/vucxpmn0x.css';
import '../../css/e/e2qoovbnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl_of99ub"/><path class="vucxpmn0x"/><path class="e2qoovbnc"/>`,
		"fallback": "energy-icons:feed-in-48-bold",
	});
}

export default Component;
