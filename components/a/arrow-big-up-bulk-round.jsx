import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogsukvk9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogsukvk9r"/>`,
		"fallback": "coolicons:arrow-big-up-bulk-round",
	});
}

export default Component;
