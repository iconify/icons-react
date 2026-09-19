import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puty-vbng.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puty-vbng"/>`,
		"fallback": "fa-solid:ambulance",
	});
}

export default Component;
