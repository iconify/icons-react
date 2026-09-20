import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn0jrr8qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn0jrr8qk"/>`,
		"fallback": "keyline-icons:folder-arrow-left-sharp",
	});
}

export default Component;
