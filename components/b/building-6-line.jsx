import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfko4vv9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfko4vv9a"/>`,
		"fallback": "mingcute:building-6-line",
	});
}

export default Component;
