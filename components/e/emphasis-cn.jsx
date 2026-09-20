import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chy9vjf-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chy9vjf-u"/>`,
		"fallback": "ri:emphasis-cn",
	});
}

export default Component;
