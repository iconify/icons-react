import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opw2n6p2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opw2n6p2a"/>`,
		"fallback": "selfhst:cilium-light",
	});
}

export default Component;
