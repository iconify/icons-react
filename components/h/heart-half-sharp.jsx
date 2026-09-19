import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dshn71jrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dshn71jrs"/>`,
		"fallback": "ion:heart-half-sharp",
	});
}

export default Component;
