import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n25yeq5ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n25yeq5ho"/>`,
		"fallback": "proicons:cut",
	});
}

export default Component;
