import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua86mmb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ua86mmb4u"/>`,
		"fallback": "streamline-ultimate:engineer-project-superviser-1-bold",
	});
}

export default Component;
