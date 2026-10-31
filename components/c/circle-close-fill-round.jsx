import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6o-a6b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6o-a6b5x"/>`,
		"fallback": "coolicons:circle-close-fill-round",
	});
}

export default Component;
