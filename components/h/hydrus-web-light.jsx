import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfh4nmb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfh4nmb6n"/>`,
		"fallback": "selfhst:hydrus-web-light",
	});
}

export default Component;
