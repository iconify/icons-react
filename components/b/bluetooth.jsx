import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f13n-ehta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f13n-ehta"/>`,
		"fallback": "icon-park:bluetooth",
	});
}

export default Component;
