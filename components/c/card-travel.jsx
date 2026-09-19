import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdi5s9ivd.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdi5s9ivd"/>`,
		"fallback": "zmdi:card-travel",
	});
}

export default Component;
