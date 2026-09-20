import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg9yb5n6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg9yb5n6r"/>`,
		"fallback": "ri:folder-fill",
	});
}

export default Component;
