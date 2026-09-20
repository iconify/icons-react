import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daxysxbef.css';
import '../../css/y/y0oobqogr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daxysxbef"/><path class="y0oobqogr"/>`,
		"fallback": "selfhst:calnode",
	});
}

export default Component;
