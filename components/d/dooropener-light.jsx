import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuj0x4b5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuj0x4b5g"/>`,
		"fallback": "selfhst:dooropener-light",
	});
}

export default Component;
