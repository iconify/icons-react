import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hej2h2wme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hej2h2wme"/>`,
		"fallback": "selfhst:dumb-genius-light",
	});
}

export default Component;
