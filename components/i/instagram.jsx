import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7sak3bll.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7sak3bll"/>`,
		"fallback": "zmdi:instagram",
	});
}

export default Component;
