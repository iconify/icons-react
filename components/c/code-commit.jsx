import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkbhw_5_e.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkbhw_5_e"/>`,
		"fallback": "fa6-solid:code-commit",
	});
}

export default Component;
