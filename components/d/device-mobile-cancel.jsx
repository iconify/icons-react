import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g45a4ubfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g45a4ubfc"/>`,
		"fallback": "tabler:device-mobile-cancel",
	});
}

export default Component;
