import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y43i-vz4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y43i-vz4c"/>`,
		"fallback": "griddy-icons:devices-filled",
	});
}

export default Component;
