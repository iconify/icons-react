import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd3ym2bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nd3ym2bee"/>`,
		"fallback": "iconamoon:arrow-down-6-circle-fill",
	});
}

export default Component;
