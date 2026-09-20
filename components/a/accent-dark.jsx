import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii_o2hbdo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii_o2hbdo"/>`,
		"fallback": "selfhst:accent-dark",
	});
}

export default Component;
