import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd_qk7bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd_qk7bir"/>`,
		"fallback": "mdi:head-light-dimmed",
	});
}

export default Component;
