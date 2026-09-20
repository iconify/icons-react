import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8rqrp_mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8rqrp_mc"/>`,
		"fallback": "tabler:device-camera-phone",
	});
}

export default Component;
