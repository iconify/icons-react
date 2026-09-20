import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm5leryez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm5leryez"/>`,
		"fallback": "simple-icons:delonghi",
	});
}

export default Component;
