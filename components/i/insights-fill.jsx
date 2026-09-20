import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw4bdl56u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw4bdl56u"/>`,
		"fallback": "si:insights-fill",
	});
}

export default Component;
