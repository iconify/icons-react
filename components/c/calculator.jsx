import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa5g3utqd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa5g3utqd"/>`,
		"fallback": "at-icons:calculator",
	});
}

export default Component;
