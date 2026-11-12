import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqk--9bbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqk--9bbo"/>`,
		"fallback": "selfhst:elysian",
	});
}

export default Component;
