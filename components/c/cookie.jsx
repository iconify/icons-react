import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmy3jvb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmy3jvb5k"/>`,
		"fallback": "bxs:cookie",
	});
}

export default Component;
