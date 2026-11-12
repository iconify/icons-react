import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfverpb-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfverpb-c"/>`,
		"fallback": "selfhst:framework",
	});
}

export default Component;
