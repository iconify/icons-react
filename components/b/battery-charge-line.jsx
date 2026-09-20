import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeyxizf-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeyxizf-v"/>`,
		"fallback": "ri:battery-charge-line",
	});
}

export default Component;
