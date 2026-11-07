import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoceahb1q.css';
import '../../css/m/ma6-19bqx.css';
import '../../css/d/dn3p8qbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoceahb1q"/><path class="ma6-19bqx"/><path class="dn3p8qbpx"/>`,
		"fallback": "solar:devices-bold-duotone",
	});
}

export default Component;
