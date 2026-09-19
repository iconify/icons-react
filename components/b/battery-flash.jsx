import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6yn4_bji.css';

const viewBox = {"width":216,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6yn4_bji"/>`,
		"fallback": "zmdi:battery-flash",
	});
}

export default Component;
