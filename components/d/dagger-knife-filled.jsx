import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nquds8b0o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nquds8b0o"/>`,
		"fallback": "dinkie-icons:dagger-knife-filled",
	});
}

export default Component;
