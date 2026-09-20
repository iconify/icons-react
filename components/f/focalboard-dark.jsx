import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgt-rix9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgt-rix9a"/>`,
		"fallback": "selfhst:focalboard-dark",
	});
}

export default Component;
