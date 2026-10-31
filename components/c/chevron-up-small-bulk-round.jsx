import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb00t0bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb00t0bjs"/>`,
		"fallback": "coolicons:chevron-up-small-bulk-round",
	});
}

export default Component;
