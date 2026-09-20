import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noub0abmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noub0abmd"/>`,
		"fallback": "mingcute:album-line",
	});
}

export default Component;
