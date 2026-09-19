import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssqmken7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssqmken7t"/>`,
		"fallback": "hugeicons:delete-03",
	});
}

export default Component;
