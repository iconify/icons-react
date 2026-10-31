import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0a7fgn5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0a7fgn5x"/>`,
		"fallback": "coolicons:chevron-right-large-bulk-round",
	});
}

export default Component;
