import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeey5wbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeey5wbox"/>`,
		"fallback": "mdi:camera-document-off",
	});
}

export default Component;
