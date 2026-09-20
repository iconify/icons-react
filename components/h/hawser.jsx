import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adpj7nbwk.css';
import '../../css/w/wp44u6bht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adpj7nbwk"/><path class="wp44u6bht"/>`,
		"fallback": "selfhst:hawser",
	});
}

export default Component;
