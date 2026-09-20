import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp3tij6sr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp3tij6sr"/>`,
		"fallback": "selfhst:deezer",
	});
}

export default Component;
