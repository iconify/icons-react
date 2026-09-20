import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo5zol14h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo5zol14h"/>`,
		"fallback": "selfhst:doordash",
	});
}

export default Component;
