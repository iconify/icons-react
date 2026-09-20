import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp_tq7kpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp_tq7kpv"/>`,
		"fallback": "mdi:gender-enby",
	});
}

export default Component;
