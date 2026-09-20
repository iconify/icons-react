import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5ah_bwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn5ah_bwf"/>`,
		"fallback": "selfhst:golang-dark",
	});
}

export default Component;
