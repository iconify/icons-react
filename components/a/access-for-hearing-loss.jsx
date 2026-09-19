import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmt1bpbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmt1bpbbd"/>`,
		"fallback": "guidance:access-for-hearing-loss",
	});
}

export default Component;
