import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3w77qb5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3w77qb5u"/>`,
		"fallback": "selfhst:cronicle-dark",
	});
}

export default Component;
