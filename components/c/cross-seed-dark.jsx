import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x33k5bbdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x33k5bbdc"/>`,
		"fallback": "selfhst:cross-seed-dark",
	});
}

export default Component;
