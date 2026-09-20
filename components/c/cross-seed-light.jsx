import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4b_bdchh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4b_bdchh"/>`,
		"fallback": "selfhst:cross-seed-light",
	});
}

export default Component;
