import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi4gs-b5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi4gs-b5o"/>`,
		"fallback": "fa6-solid:forward",
	});
}

export default Component;
