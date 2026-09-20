import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh5x32nps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh5x32nps"/>`,
		"fallback": "selfhst:installatron-light",
	});
}

export default Component;
