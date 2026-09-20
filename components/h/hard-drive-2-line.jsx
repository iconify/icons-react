import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1jpej9ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1jpej9ny"/>`,
		"fallback": "ri:hard-drive-2-line",
	});
}

export default Component;
