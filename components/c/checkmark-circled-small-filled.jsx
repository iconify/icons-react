import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paq201bve.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paq201bve"/>`,
		"fallback": "dinkie-icons:checkmark-circled-small-filled",
	});
}

export default Component;
