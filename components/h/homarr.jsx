import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8t2-ybfa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8t2-ybfa"/>`,
		"fallback": "selfhst:homarr",
	});
}

export default Component;
