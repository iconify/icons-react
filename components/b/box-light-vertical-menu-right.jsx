import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh_dlqbyg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh_dlqbyg"/>`,
		"fallback": "memory:box-light-vertical-menu-right",
	});
}

export default Component;
