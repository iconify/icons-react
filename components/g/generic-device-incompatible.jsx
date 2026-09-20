import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx1la0w2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx1la0w2t"/>`,
		"fallback": "ix:generic-device-incompatible",
	});
}

export default Component;
