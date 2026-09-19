import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0_xffd0s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0_xffd0s"/>`,
		"fallback": "gis:earth-network-o",
	});
}

export default Component;
