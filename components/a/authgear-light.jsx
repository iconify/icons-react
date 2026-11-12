import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev6_nwamt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev6_nwamt"/>`,
		"fallback": "selfhst:authgear-light",
	});
}

export default Component;
