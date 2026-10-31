import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxe8bc6ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxe8bc6ej"/>`,
		"fallback": "coolicons:file-check-round",
	});
}

export default Component;
