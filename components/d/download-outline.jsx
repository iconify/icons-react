import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1fqb2bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1fqb2bfc"/>`,
		"fallback": "typcn:download-outline",
	});
}

export default Component;
