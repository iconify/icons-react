import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxjgpfbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxjgpfbbh"/>`,
		"fallback": "bitcoin-icons:flip-horizontal-filled",
	});
}

export default Component;
