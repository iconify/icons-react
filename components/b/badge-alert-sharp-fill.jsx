import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdz98ub5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rdz98ub5k"/>`,
		"fallback": "keyline-icons:badge-alert-sharp-fill",
	});
}

export default Component;
