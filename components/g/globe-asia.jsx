import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d045_fbvn.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d045_fbvn"/>`,
		"fallback": "fa-solid:globe-asia",
	});
}

export default Component;
