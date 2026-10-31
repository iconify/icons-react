import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trvs4ey0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trvs4ey0i"/>`,
		"fallback": "coolicons:divide-duotone-round",
	});
}

export default Component;
