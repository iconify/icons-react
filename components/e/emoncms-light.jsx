import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd4o_acha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd4o_acha"/>`,
		"fallback": "selfhst:emoncms-light",
	});
}

export default Component;
