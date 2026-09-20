import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyxxv8bah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyxxv8bah"/>`,
		"fallback": "selfhst:daemon-sync-light",
	});
}

export default Component;
