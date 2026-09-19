import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux_dk25ob.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux_dk25ob"/>`,
		"fallback": "fa7-brands:circle-zulip",
	});
}

export default Component;
