import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljln6q8iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljln6q8iu"/>`,
		"fallback": "hugeicons:ai-chemistry-03",
	});
}

export default Component;
