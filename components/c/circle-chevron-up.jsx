import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwt1nfn4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwt1nfn4m"/>`,
		"fallback": "fa6-solid:circle-chevron-up",
	});
}

export default Component;
