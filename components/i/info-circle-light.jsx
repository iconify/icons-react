import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnilq3uxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnilq3uxo"/>`,
		"fallback": "stash:info-circle-light",
	});
}

export default Component;
