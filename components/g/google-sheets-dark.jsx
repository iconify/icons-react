import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-t-9-bbm.css';
import '../../css/r/riiz-0est.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-t-9-bbm"/><path class="riiz-0est"/>`,
		"fallback": "selfhst:google-sheets-dark",
	});
}

export default Component;
