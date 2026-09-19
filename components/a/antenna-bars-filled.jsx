import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovevfhr9g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovevfhr9g"/>`,
		"fallback": "dinkie-icons:antenna-bars-filled",
	});
}

export default Component;
