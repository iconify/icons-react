import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eas5tkb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eas5tkb6t"/>`,
		"fallback": "mdi:domain-plus",
	});
}

export default Component;
