import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7a14f7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7a14f7v"/>`,
		"fallback": "ix:align-objects-horizontally",
	});
}

export default Component;
