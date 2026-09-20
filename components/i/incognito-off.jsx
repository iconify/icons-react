import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dks-8vbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dks-8vbqi"/>`,
		"fallback": "mdi:incognito-off",
	});
}

export default Component;
