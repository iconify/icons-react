import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqoho4b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqoho4b8p"/>`,
		"fallback": "mdi:email-check-outline",
	});
}

export default Component;
