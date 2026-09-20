import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbt_19gof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbt_19gof"/>`,
		"fallback": "ri:folder-shield-2-fill",
	});
}

export default Component;
