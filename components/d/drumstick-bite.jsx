import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am2xe984g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am2xe984g"/>`,
		"fallback": "fa6-solid:drumstick-bite",
	});
}

export default Component;
