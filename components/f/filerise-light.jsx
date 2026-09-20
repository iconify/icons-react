import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8m2a8w6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8m2a8w6n"/>`,
		"fallback": "selfhst:filerise-light",
	});
}

export default Component;
