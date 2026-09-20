import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3xfhvb3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3xfhvb3r"/>`,
		"fallback": "ix:chevron-left-bar-small",
	});
}

export default Component;
