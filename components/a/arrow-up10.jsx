import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n84qhnb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n84qhnb9f"/>`,
		"fallback": "hugeicons:arrow-up10",
	});
}

export default Component;
