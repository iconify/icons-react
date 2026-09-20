import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw-zbzb4r.css';
import '../../css/x/xc1w02vnd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw-zbzb4r"/><path class="xc1w02vnd"/>`,
		"fallback": "streamline-pixel:design-ruler",
	});
}

export default Component;
