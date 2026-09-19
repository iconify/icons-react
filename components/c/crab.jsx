import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm4ce8bws.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm4ce8bws"/>`,
		"fallback": "dinkie-icons:crab",
	});
}

export default Component;
