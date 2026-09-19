import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfc90oerk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfc90oerk"/>`,
		"fallback": "boxicons:dizzy-filled",
	});
}

export default Component;
