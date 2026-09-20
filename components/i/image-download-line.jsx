import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou56esbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou56esbxa"/>`,
		"fallback": "ri:image-download-line",
	});
}

export default Component;
