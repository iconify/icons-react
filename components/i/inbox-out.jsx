import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v70d_-yfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v70d_-yfi"/>`,
		"fallback": "griddy-icons:inbox-out",
	});
}

export default Component;
