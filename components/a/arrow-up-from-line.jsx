import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoa99fbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoa99fbtn"/>`,
		"fallback": "hugeicons:arrow-up-from-line",
	});
}

export default Component;
