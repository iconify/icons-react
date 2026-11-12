import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4zh2mqii.css';
import '../../css/n/nxd5vsn0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4zh2mqii"/><path class="nxd5vsn0s"/>`,
		"fallback": "selfhst:eonvelope",
	});
}

export default Component;
