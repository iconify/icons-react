import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ac8-n2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3ac8-n2d"/>`,
		"fallback": "selfhst:fedex-light",
	});
}

export default Component;
