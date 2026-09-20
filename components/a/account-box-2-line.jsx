import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izjb9cb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izjb9cb5i"/>`,
		"fallback": "ri:account-box-2-line",
	});
}

export default Component;
