import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljykc90oq.css';
import '../../css/i/ivll_4uwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljykc90oq"/><path class="ivll_4uwd"/>`,
		"fallback": "bx:bxs-bullseye",
	});
}

export default Component;
