import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xazcc-cgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xazcc-cgm"/>`,
		"fallback": "subway:call-3",
	});
}

export default Component;
