import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4_kwrboz.css';
import '../../css/a/az5k_yb4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4_kwrboz"/><path class="az5k_yb4r"/>`,
		"fallback": "selfhst:frappe-cloud",
	});
}

export default Component;
