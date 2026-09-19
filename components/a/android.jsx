import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ecztt3y.css';

const viewBox = {"width":432,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ecztt3y"/>`,
		"fallback": "zmdi:android",
	});
}

export default Component;
