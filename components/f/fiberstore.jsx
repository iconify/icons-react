import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuntz5arz.css';
import '../../css/l/l9we6spoz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuntz5arz"/><path class="l9we6spoz"/>`,
		"fallback": "selfhst:fiberstore",
	});
}

export default Component;
