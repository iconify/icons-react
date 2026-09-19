import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3qfxppay.css';
import '../../css/l/l5yoditpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3qfxppay"/><circle class="l5yoditpm"/>`,
		"fallback": "bxs:disc",
	});
}

export default Component;
