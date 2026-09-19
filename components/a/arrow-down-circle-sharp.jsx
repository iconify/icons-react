import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4-0o5epi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4-0o5epi"/>`,
		"fallback": "ion:arrow-down-circle-sharp",
	});
}

export default Component;
