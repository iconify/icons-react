import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc-uk6b5e.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc-uk6b5e"/>`,
		"fallback": "lineicons:box-closed",
	});
}

export default Component;
