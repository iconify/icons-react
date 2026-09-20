import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auc171b2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auc171b2x"/>`,
		"fallback": "selfhst:freeradius-dark",
	});
}

export default Component;
