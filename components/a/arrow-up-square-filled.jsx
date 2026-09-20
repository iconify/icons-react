import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0p8aac4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0p8aac4g"/>`,
		"fallback": "tabler:arrow-up-square-filled",
	});
}

export default Component;
