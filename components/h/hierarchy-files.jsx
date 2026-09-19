import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tshyjsb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tshyjsb4v"/>`,
		"fallback": "hugeicons:hierarchy-files",
	});
}

export default Component;
