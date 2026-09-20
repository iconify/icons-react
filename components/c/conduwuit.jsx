import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4goj5bvt.css';
import '../../css/y/yrj6_5bgi.css';
import '../../css/d/d83egmi4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4goj5bvt"/><path class="yrj6_5bgi"/><path class="d83egmi4t"/>`,
		"fallback": "selfhst:conduwuit",
	});
}

export default Component;
