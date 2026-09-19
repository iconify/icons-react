import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy341l93m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy341l93m"/>`,
		"fallback": "famicons:caret-down",
	});
}

export default Component;
