import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q96z7vg-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q96z7vg-e"/>`,
		"fallback": "keyline-icons:cloud-check-fill",
	});
}

export default Component;
