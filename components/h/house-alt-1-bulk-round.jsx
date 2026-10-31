import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb0burbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb0burbka"/>`,
		"fallback": "coolicons:house-alt-1-bulk-round",
	});
}

export default Component;
