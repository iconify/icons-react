import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cufzc4b7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cufzc4b7s"/>`,
		"fallback": "selfhst:framework",
	});
}

export default Component;
