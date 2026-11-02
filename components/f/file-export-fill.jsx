import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av3ar4-9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av3ar4-9j"/>`,
		"fallback": "mingcute:file-export-fill",
	});
}

export default Component;
