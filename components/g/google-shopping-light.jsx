import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whv-2bcvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whv-2bcvn"/>`,
		"fallback": "selfhst:google-shopping-light",
	});
}

export default Component;
