import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnx8_rqso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnx8_rqso"/>`,
		"fallback": "guidance:ambulance-entrance",
	});
}

export default Component;
