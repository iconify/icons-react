import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd2jl2a8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd2jl2a8o"/>`,
		"fallback": "selfhst:glances-light",
	});
}

export default Component;
