import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lng-gjbkb.css';
import '../../css/i/i3ca3fb1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lng-gjbkb"/><path clip-rule="evenodd" class="i3ca3fb1b"/></g>`,
		"fallback": "streamline-plump-color:hotel-five-star-flat",
	});
}

export default Component;
