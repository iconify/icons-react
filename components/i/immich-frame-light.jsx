import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g64y_l5-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g64y_l5-n"/>`,
		"fallback": "selfhst:immich-frame-light",
	});
}

export default Component;
