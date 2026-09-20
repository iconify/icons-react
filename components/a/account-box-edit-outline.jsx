import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-2-zob9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-2-zob9y"/>`,
		"fallback": "mdi:account-box-edit-outline",
	});
}

export default Component;
