import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghi7qny3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghi7qny3d"/>`,
		"fallback": "mdi:account-tie-voice-outline",
	});
}

export default Component;
