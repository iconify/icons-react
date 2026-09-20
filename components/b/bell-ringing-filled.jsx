import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unp_oacth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unp_oacth"/>`,
		"fallback": "tabler:bell-ringing-filled",
	});
}

export default Component;
