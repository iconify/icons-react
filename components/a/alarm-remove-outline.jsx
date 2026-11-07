import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il8m2xbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="il8m2xbwe"/>`,
		"fallback": "solar:alarm-remove-outline",
	});
}

export default Component;
