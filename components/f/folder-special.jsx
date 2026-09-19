import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puuzwgb1p.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puuzwgb1p"/>`,
		"fallback": "zmdi:folder-special",
	});
}

export default Component;
