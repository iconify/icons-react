import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl73selcd.css';
import '../../css/z/zusvsjbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl73selcd"/><path class="zusvsjbic"/>`,
		"fallback": "selfhst:adobe-after-effects",
	});
}

export default Component;
