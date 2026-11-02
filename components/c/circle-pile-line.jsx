import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czm6z7bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czm6z7bpm"/>`,
		"fallback": "mingcute:circle-pile-line",
	});
}

export default Component;
