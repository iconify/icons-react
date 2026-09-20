import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/s6fvfe.css';
import '../../css/g/gsw2zd.css';
import '../../css/f/fill-from-0_3.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c s6fvfe"/><path class="a0m25c gsw2zd"/>`,
		"fallback": "line-md:confirm-circle-twotone-to-circle-transition",
	});
}

export default Component;
