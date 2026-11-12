import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooy89kzvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooy89kzvx"/>`,
		"fallback": "selfhst:i-librarian",
	});
}

export default Component;
