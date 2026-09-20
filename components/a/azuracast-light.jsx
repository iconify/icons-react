import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pefbi7b3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pefbi7b3h"/>`,
		"fallback": "selfhst:azuracast-light",
	});
}

export default Component;
