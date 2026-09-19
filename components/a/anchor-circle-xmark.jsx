import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbrj70bkn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbrj70bkn"/>`,
		"fallback": "fa6-solid:anchor-circle-xmark",
	});
}

export default Component;
