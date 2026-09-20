import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocf2bv34c.css';
import '../../css/o/ou5xg8k1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocf2bv34c"/><path class="ou5xg8k1y"/>`,
		"fallback": "selfhst:ghostboard",
	});
}

export default Component;
