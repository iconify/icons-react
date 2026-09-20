import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fujqedbkp.css';
import '../../css/e/e15e1_l3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fujqedbkp"/><path class="e15e1_l3m"/>`,
		"fallback": "selfhst:codeberg-light",
	});
}

export default Component;
