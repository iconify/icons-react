import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ych81ffjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ych81ffjf"/>`,
		"fallback": "griddy-icons:info-octagon-filled",
	});
}

export default Component;
