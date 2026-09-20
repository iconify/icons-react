import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz5t110yc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz5t110yc"/>`,
		"fallback": "selfhst:corecontrol-dark",
	});
}

export default Component;
