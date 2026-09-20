import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx3nz_bus.css';
import '../../css/n/ndo424b7h.css';
import '../../css/q/q8jig3bhh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx3nz_bus"/><path class="ndo424b7h"/><path class="q8jig3bhh"/>`,
		"fallback": "selfhst:beets",
	});
}

export default Component;
