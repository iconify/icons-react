import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdif4bjbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdif4bjbp"/>`,
		"fallback": "coolicons:arrow-up-from-line-fill-round",
	});
}

export default Component;
