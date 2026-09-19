import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edz6g3fgo.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edz6g3fgo"/>`,
		"fallback": "zmdi:folder",
	});
}

export default Component;
