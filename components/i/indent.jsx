import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2w618bkm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2w618bkm"/>`,
		"fallback": "fa6-solid:indent",
	});
}

export default Component;
