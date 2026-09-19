import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i374mtb8a.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i374mtb8a"/>`,
		"fallback": "zmdi:case",
	});
}

export default Component;
