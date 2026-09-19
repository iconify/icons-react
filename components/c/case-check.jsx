import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqrwpqbrw.css';

const viewBox = {"width":432,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqrwpqbrw"/>`,
		"fallback": "zmdi:case-check",
	});
}

export default Component;
