import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tifk5dbdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tifk5dbdu"/>`,
		"fallback": "fa-solid:clock",
	});
}

export default Component;
