import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu1ht9fgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu1ht9fgy"/>`,
		"fallback": "mynaui:external-link-solid",
	});
}

export default Component;
