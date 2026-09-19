import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecy_mvlqd.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecy_mvlqd"/>`,
		"fallback": "zmdi:assignment",
	});
}

export default Component;
