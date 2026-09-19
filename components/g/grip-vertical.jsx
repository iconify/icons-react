import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhun8vz6u.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhun8vz6u"/>`,
		"fallback": "fa-solid:grip-vertical",
	});
}

export default Component;
