import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx4qcgl2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx4qcgl2i"/>`,
		"fallback": "selfhst:filesync-light",
	});
}

export default Component;
