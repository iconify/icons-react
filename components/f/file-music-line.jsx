import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfea8hqwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfea8hqwb"/>`,
		"fallback": "mingcute:file-music-line",
	});
}

export default Component;
