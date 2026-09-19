import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvdt7r95i.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvdt7r95i"/>`,
		"fallback": "zmdi:github-box",
	});
}

export default Component;
