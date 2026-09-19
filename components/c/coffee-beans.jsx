import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcfen957l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcfen957l"/>`,
		"fallback": "boxicons:coffee-beans",
	});
}

export default Component;
