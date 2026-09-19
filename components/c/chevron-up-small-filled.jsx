import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt6wbbtjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt6wbbtjj"/>`,
		"fallback": "griddy-icons:chevron-up-small-filled",
	});
}

export default Component;
