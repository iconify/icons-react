import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg2cq_bng.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg2cq_bng"/>`,
		"fallback": "selfhst:flaresolverr-dark",
	});
}

export default Component;
