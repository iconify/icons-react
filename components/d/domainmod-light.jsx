import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fss36bbna.css';
import '../../css/w/w3qyplb8m.css';
import '../../css/g/g1oxkbkoa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fss36bbna"/><path class="w3qyplb8m"/><path class="g1oxkbkoa"/>`,
		"fallback": "selfhst:domainmod-light",
	});
}

export default Component;
