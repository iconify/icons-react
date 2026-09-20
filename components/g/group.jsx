import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw3k0x4xl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw3k0x4xl"/>`,
		"fallback": "ix:group",
	});
}

export default Component;
