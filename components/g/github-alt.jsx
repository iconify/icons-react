import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8lb625tm.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8lb625tm"/>`,
		"fallback": "zmdi:github-alt",
	});
}

export default Component;
