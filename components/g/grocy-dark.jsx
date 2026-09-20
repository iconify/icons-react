import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klv4feksd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klv4feksd"/>`,
		"fallback": "selfhst:grocy-dark",
	});
}

export default Component;
