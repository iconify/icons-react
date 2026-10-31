import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikjibbc6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikjibbc6s"/>`,
		"fallback": "sidekickicons:face-smile-plus",
	});
}

export default Component;
