import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0tvb20ai.css';
import '../../css/r/r1hiqbchs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0tvb20ai"/><path class="r1hiqbchs"/>`,
		"fallback": "selfhst:healthlog-light",
	});
}

export default Component;
