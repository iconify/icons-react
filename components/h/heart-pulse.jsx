import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2owkl-9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2owkl-9q"/>`,
		"fallback": "noviair-light:heart-pulse",
	});
}

export default Component;
