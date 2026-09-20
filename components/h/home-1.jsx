import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz2p7bcuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz2p7bcuj"/>`,
		"fallback": "subway:home-1",
	});
}

export default Component;
