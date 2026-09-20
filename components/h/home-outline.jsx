import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl5vu2b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl5vu2b7d"/>`,
		"fallback": "typcn:home-outline",
	});
}

export default Component;
