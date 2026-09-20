import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvt9sjb9p.css';
import '../../css/y/yz-gywb0o.css';
import '../../css/o/owjnrbm2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvt9sjb9p"/><path class="yz-gywb0o"/><path class="owjnrbm2d"/>`,
		"fallback": "token:aero",
	});
}

export default Component;
