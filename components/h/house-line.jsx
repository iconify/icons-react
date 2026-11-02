import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyjkhgb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyjkhgb2z"/>`,
		"fallback": "mingcute:house-line",
	});
}

export default Component;
