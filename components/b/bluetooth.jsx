import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npvyk8bwj.css';
import '../../css/o/otc7hdckt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npvyk8bwj"/><path class="otc7hdckt"/>`,
		"fallback": "selfhst:bluetooth",
	});
}

export default Component;
