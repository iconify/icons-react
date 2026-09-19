import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw3oggbcy.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw3oggbcy"/>`,
		"fallback": "zmdi:eject",
	});
}

export default Component;
