import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx5b0f8ph.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx5b0f8ph"/>`,
		"fallback": "zmdi:folder-outline",
	});
}

export default Component;
