import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isns3yuhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isns3yuhz"/>`,
		"fallback": "eva:chevron-left-outline",
	});
}

export default Component;
