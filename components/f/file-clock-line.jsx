import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkddmwh3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkddmwh3x"/>`,
		"fallback": "mingcute:file-clock-line",
	});
}

export default Component;
