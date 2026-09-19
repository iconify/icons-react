import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e22g7d7ar.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e22g7d7ar"/>`,
		"fallback": "zmdi:comment",
	});
}

export default Component;
