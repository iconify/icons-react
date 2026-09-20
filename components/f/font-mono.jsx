import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf4c8cccl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf4c8cccl"/>`,
		"fallback": "ri:font-mono",
	});
}

export default Component;
