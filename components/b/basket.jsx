import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nne51pr0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nne51pr0o"/>`,
		"fallback": "noviair-light:basket",
	});
}

export default Component;
