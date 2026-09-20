import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnqo0zbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnqo0zbuf"/>`,
		"fallback": "keyline-icons:arrow-in-left-dashed-panel-sharp",
	});
}

export default Component;
