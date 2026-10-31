import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mub4lvbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mub4lvbbx"/>`,
		"fallback": "sidekickicons:cookie",
	});
}

export default Component;
