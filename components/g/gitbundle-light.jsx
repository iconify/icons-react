import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxupni78q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxupni78q"/>`,
		"fallback": "selfhst:gitbundle-light",
	});
}

export default Component;
