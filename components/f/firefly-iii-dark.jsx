import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi86u_ule.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi86u_ule"/>`,
		"fallback": "selfhst:firefly-iii-dark",
	});
}

export default Component;
