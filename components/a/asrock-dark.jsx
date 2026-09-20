import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go4x3ob7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go4x3ob7n"/>`,
		"fallback": "selfhst:asrock-dark",
	});
}

export default Component;
