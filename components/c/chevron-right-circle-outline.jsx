import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmkfwdx4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmkfwdx4v"/>`,
		"fallback": "mdi:chevron-right-circle-outline",
	});
}

export default Component;
