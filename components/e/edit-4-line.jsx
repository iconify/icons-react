import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igc66db3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igc66db3c"/>`,
		"fallback": "mingcute:edit-4-line",
	});
}

export default Component;
