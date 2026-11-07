import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9bla539y.css';
import '../../css/q/qbfdzwb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9bla539y"/><path class="qbfdzwb5u"/>`,
		"fallback": "solar:arrow-down-to-line-outline",
	});
}

export default Component;
