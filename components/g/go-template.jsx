import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duddcrv6n.css';
import '../../css/k/koyzp3bls.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duddcrv6n"/><path class="koyzp3bls"/>`,
		"fallback": "catppuccin:go-template",
	});
}

export default Component;
