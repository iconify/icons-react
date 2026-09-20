import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4dpvcczx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4dpvcczx"/>`,
		"fallback": "selfhst:homarr-light",
	});
}

export default Component;
