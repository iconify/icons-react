import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q74gbhzyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q74gbhzyg"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-form-text-area-1-bold",
	});
}

export default Component;
