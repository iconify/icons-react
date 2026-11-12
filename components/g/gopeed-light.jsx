import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw_eb9b5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw_eb9b5p"/>`,
		"fallback": "selfhst:gopeed-light",
	});
}

export default Component;
