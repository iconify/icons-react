import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtvz4qqfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtvz4qqfz"/>`,
		"fallback": "cbi:asus-rp-68u",
	});
}

export default Component;
