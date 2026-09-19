import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbu41_9ah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbu41_9ah"/>`,
		"fallback": "fa6-regular:gem",
	});
}

export default Component;
