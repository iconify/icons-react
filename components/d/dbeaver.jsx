import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixspvj17v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixspvj17v"/>`,
		"fallback": "simple-icons:dbeaver",
	});
}

export default Component;
