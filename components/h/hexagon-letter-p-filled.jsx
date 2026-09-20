import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iez0y29ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iez0y29ij"/>`,
		"fallback": "tabler:hexagon-letter-p-filled",
	});
}

export default Component;
