import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhr1z4b3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhr1z4b3l"/>`,
		"fallback": "selfhst:dynacat-dark",
	});
}

export default Component;
