import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-rjbo22o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-rjbo22o"/>`,
		"fallback": "lets-icons:book-open-fill",
	});
}

export default Component;
