import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxsk1y4aw.css';
import '../../css/f/fuq627b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxsk1y4aw"/><path class="fuq627b0r"/>`,
		"fallback": "boxicons:arrow-in-down-right-stroke-circle",
	});
}

export default Component;
