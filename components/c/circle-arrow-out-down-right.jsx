import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpbo3xbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpbo3xbno"/>`,
		"fallback": "hugeicons:circle-arrow-out-down-right",
	});
}

export default Component;
