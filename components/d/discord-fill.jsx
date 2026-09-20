import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh49r0egi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh49r0egi"/>`,
		"fallback": "mingcute:discord-fill",
	});
}

export default Component;
