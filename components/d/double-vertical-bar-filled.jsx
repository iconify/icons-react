import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la_vh3d1z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la_vh3d1z"/>`,
		"fallback": "dinkie-icons:double-vertical-bar-filled",
	});
}

export default Component;
