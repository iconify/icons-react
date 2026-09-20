import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtmoivb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtmoivb_c"/>`,
		"fallback": "selfhst:commafeed-light",
	});
}

export default Component;
