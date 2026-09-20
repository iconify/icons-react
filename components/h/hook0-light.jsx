import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb8s_pcfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb8s_pcfe"/>`,
		"fallback": "selfhst:hook0-light",
	});
}

export default Component;
