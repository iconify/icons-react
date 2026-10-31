import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwxn38blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwxn38blb"/>`,
		"fallback": "coolicons:id-badge-fill-round",
	});
}

export default Component;
