import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4ecrjb0t.css';

const viewBox = {"width":512,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4ecrjb0t"/>`,
		"fallback": "zmdi:collection-folder-image",
	});
}

export default Component;
