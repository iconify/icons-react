import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ehm7b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-ehm7b9y"/>`,
		"fallback": "streamline-logos:designmoo-logo-solid",
	});
}

export default Component;
