import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2z5eczhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2z5eczhn"/>`,
		"fallback": "mdi:eye-minus",
	});
}

export default Component;
