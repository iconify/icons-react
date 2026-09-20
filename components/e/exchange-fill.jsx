import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9m30gb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9m30gb0r"/>`,
		"fallback": "ri:exchange-fill",
	});
}

export default Component;
