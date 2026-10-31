import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1rmxw4ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1rmxw4ye"/>`,
		"fallback": "coolicons:house-alt-1-fill-round",
	});
}

export default Component;
