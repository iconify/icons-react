import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w323g6bsn.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w323g6bsn"/>`,
		"fallback": "zmdi:desktop-mac",
	});
}

export default Component;
