import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlsl_5b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlsl_5b4z"/>`,
		"fallback": "uil:adjust-alt",
	});
}

export default Component;
