import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brho0yb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brho0yb8q"/>`,
		"fallback": "keyline-icons:airpods-open-sharp-fill",
	});
}

export default Component;
