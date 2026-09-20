import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwyj592ey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwyj592ey"/>`,
		"fallback": "selfhst:cachet-dark",
	});
}

export default Component;
