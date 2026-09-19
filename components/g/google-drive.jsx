import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj62g-b9h.css';

const viewBox = {"width":464,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj62g-b9h"/>`,
		"fallback": "zmdi:google-drive",
	});
}

export default Component;
