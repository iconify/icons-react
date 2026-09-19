import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka6fx8hhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka6fx8hhr"/>`,
		"fallback": "hugeicons:folder-security",
	});
}

export default Component;
