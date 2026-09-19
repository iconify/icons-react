import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld-6nbc_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld-6nbc_y"/>`,
		"fallback": "griddy-icons:arrow-down-right",
	});
}

export default Component;
