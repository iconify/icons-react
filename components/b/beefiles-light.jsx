import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vascdch3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vascdch3j"/>`,
		"fallback": "selfhst:beefiles-light",
	});
}

export default Component;
