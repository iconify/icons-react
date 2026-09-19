import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ipmzduq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ipmzduq"/>`,
		"fallback": "icon-park-outline:arrow-left-up",
	});
}

export default Component;
