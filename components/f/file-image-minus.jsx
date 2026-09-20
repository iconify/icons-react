import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry8x41zgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry8x41zgj"/>`,
		"fallback": "mdi:file-image-minus",
	});
}

export default Component;
