import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo587bb1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo587bb1p"/>`,
		"fallback": "selfhst:cryptgeon-dark",
	});
}

export default Component;
