import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw5x7qc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dw5x7qc2s"/>`,
		"fallback": "griddy-icons:chrome-cast-filled",
	});
}

export default Component;
