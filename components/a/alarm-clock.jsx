import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlnc8j4gt.css';
import '../../css/w/w-f7zlbrw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlnc8j4gt"/><path class="w-f7zlbrw"/>`,
		"fallback": "lineicons:alarm-clock",
	});
}

export default Component;
