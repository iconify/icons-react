import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yok2dcbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yok2dcbit"/>`,
		"fallback": "griddy-icons:blood-pressure",
	});
}

export default Component;
