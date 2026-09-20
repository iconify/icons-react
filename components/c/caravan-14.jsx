import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ums5bfkpv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ums5bfkpv"/>`,
		"fallback": "osmic:caravan-14",
	});
}

export default Component;
