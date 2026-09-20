import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vned2cgbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vned2cgbp"/>`,
		"fallback": "tabler:hexagon-number-8-filled",
	});
}

export default Component;
