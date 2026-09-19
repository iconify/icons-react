import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwkw3-cho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwkw3-cho"/>`,
		"fallback": "fa-regular:check-circle",
	});
}

export default Component;
