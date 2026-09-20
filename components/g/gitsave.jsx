import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-6bvg8-p.css';
import '../../css/n/naowi_jsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-6bvg8-p"/><path class="naowi_jsy"/>`,
		"fallback": "selfhst:gitsave",
	});
}

export default Component;
