import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzdi1-b3n.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzdi1-b3n"/>`,
		"fallback": "fa6-solid:bottle-droplet",
	});
}

export default Component;
