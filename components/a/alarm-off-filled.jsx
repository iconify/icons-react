import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4zrs3bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m4zrs3bne"/>`,
		"fallback": "griddy-icons:alarm-off-filled",
	});
}

export default Component;
