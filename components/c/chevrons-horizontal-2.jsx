import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spfb3wbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spfb3wbhj"/>`,
		"fallback": "pixelarticons:chevrons-horizontal-2",
	});
}

export default Component;
