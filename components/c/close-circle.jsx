import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6ig2cc8a.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6ig2cc8a"/>`,
		"fallback": "zmdi:close-circle",
	});
}

export default Component;
