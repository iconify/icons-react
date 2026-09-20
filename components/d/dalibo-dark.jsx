import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh45i_bvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh45i_bvd"/>`,
		"fallback": "selfhst:dalibo-dark",
	});
}

export default Component;
