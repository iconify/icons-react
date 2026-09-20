import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cawwofbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cawwofbza"/>`,
		"fallback": "mingcute:house-2-line",
	});
}

export default Component;
