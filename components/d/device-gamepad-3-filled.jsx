import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqq0pmbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqq0pmbdy"/>`,
		"fallback": "tabler:device-gamepad-3-filled",
	});
}

export default Component;
