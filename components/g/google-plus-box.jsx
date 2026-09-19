import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l27afibyh.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l27afibyh"/>`,
		"fallback": "zmdi:google-plus-box",
	});
}

export default Component;
