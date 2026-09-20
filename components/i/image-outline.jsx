import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdzlzlb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdzlzlb0f"/>`,
		"fallback": "typcn:image-outline",
	});
}

export default Component;
