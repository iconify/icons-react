import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snuqv5wdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snuqv5wdj"/>`,
		"fallback": "keyline-icons:arrow-in-up-left-dashed-panel-fill",
	});
}

export default Component;
