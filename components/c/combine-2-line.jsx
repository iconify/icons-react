import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-e5hmj2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-e5hmj2z"/>`,
		"fallback": "mingcute:combine-2-line",
	});
}

export default Component;
