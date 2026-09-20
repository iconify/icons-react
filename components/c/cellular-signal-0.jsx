import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9b-pgb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9b-pgb_t"/>`,
		"fallback": "pixelarticons:cellular-signal-0",
	});
}

export default Component;
