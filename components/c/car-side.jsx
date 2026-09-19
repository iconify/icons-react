import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpdpv0b3s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpdpv0b3s"/>`,
		"fallback": "fa6-solid:car-side",
	});
}

export default Component;
