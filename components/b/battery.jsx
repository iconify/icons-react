import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsjd7loit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsjd7loit"/>`,
		"fallback": "noviair-light:battery",
	});
}

export default Component;
