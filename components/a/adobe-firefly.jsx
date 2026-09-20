import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgdhurbaf.css';
import '../../css/n/nj8wk4a5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgdhurbaf"/><path class="nj8wk4a5o"/>`,
		"fallback": "selfhst:adobe-firefly",
	});
}

export default Component;
