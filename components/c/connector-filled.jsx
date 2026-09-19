import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ico4pibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ico4pibau"/>`,
		"fallback": "boxicons:connector-filled",
	});
}

export default Component;
