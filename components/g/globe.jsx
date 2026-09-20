import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsz3vzbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsz3vzbqp"/>`,
		"fallback": "typcn:globe",
	});
}

export default Component;
