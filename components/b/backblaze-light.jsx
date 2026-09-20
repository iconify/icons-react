import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4p59zv7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4p59zv7e"/>`,
		"fallback": "selfhst:backblaze-light",
	});
}

export default Component;
