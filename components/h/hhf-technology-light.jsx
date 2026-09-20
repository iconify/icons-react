import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-uwexb4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-uwexb4n"/>`,
		"fallback": "selfhst:hhf-technology-light",
	});
}

export default Component;
