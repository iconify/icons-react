import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcab0ozmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcab0ozmy"/>`,
		"fallback": "selfhst:bin",
	});
}

export default Component;
