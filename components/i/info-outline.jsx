import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd_6cr3kz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd_6cr3kz"/>`,
		"fallback": "dashicons:info-outline",
	});
}

export default Component;
