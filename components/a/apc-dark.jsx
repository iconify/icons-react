import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oil6zn__w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oil6zn__w"/>`,
		"fallback": "selfhst:apc-dark",
	});
}

export default Component;
