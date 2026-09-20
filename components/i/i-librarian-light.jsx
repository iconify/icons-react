import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkw3vswdv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkw3vswdv"/>`,
		"fallback": "selfhst:i-librarian-light",
	});
}

export default Component;
