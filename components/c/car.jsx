import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bopws0e3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bopws0e3n"/>`,
		"fallback": "fa-solid:car",
	});
}

export default Component;
