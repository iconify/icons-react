import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvd_txbci.css';

const viewBox = {"width":280,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvd_txbci"/>`,
		"fallback": "zmdi:brightness-3",
	});
}

export default Component;
