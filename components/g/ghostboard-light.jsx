import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdh19hmax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdh19hmax"/>`,
		"fallback": "selfhst:ghostboard-light",
	});
}

export default Component;
