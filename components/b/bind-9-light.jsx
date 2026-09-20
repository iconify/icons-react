import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2qajxb-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2qajxb-n"/>`,
		"fallback": "selfhst:bind-9-light",
	});
}

export default Component;
