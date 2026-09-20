import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/splw5nbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="splw5nbqc"/>`,
		"fallback": "solar:grid-3x3-outline",
	});
}

export default Component;
