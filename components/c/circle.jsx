import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo3r6sbun.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo3r6sbun"/>`,
		"fallback": "zmdi:circle",
	});
}

export default Component;
