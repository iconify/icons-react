import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igc5pzbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igc5pzbwv"/>`,
		"fallback": "mingcute:clipboard-pen-line-line",
	});
}

export default Component;
