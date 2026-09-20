import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8cem1bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8cem1bzi"/>`,
		"fallback": "keyline-icons:arrow-in-up-right-dashed-panel-fill",
	});
}

export default Component;
