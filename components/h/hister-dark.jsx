import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d874l2bcu.css';
import '../../css/p/pemuagbhh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d874l2bcu"/><path class="pemuagbhh"/>`,
		"fallback": "selfhst:hister-dark",
	});
}

export default Component;
