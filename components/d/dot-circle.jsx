import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7fwh78cv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7fwh78cv"/>`,
		"fallback": "fa-regular:dot-circle",
	});
}

export default Component;
