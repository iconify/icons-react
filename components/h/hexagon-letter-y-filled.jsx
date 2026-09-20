import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no8yeybbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no8yeybbi"/>`,
		"fallback": "tabler:hexagon-letter-y-filled",
	});
}

export default Component;
