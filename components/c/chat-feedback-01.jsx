import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2oxu-1qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2oxu-1qw"/>`,
		"fallback": "hugeicons:chat-feedback-01",
	});
}

export default Component;
