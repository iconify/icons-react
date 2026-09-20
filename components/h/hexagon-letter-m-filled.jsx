import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxnykw-wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxnykw-wh"/>`,
		"fallback": "tabler:hexagon-letter-m-filled",
	});
}

export default Component;
