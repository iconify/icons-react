import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj5k-rjmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj5k-rjmc"/>`,
		"fallback": "selfhst:calibre-web",
	});
}

export default Component;
