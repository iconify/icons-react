import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj64-jb1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj64-jb1c"/>`,
		"fallback": "selfhst:homedock-os-dark",
	});
}

export default Component;
