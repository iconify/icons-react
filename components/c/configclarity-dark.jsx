import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkyc7bbky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkyc7bbky"/>`,
		"fallback": "selfhst:configclarity-dark",
	});
}

export default Component;
