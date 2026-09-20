import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5przi3uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5przi3uj"/>`,
		"fallback": "sidekickicons:dots-3x3",
	});
}

export default Component;
