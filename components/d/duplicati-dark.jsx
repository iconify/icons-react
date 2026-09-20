import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sztx2j67i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sztx2j67i"/>`,
		"fallback": "selfhst:duplicati-dark",
	});
}

export default Component;
