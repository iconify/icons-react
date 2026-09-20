import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heu0qx0oz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heu0qx0oz"/>`,
		"fallback": "selfhst:activepieces-dark",
	});
}

export default Component;
