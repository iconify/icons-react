import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ouhtb3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q3ouhtb3r"/>`,
		"fallback": "ion:ellipse-outline",
	});
}

export default Component;
