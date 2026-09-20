import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp4zgl_dm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp4zgl_dm"/>`,
		"fallback": "selfhst:inexogy-dark",
	});
}

export default Component;
