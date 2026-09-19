import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg0lz9bfx.css';
import '../../css/y/y-np30t2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="lg0lz9bfx"/><path class="y-np30t2x"/>`,
		"fallback": "boxicons:bench-filled",
	});
}

export default Component;
