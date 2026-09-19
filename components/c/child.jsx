import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plg_1db1o.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plg_1db1o"/>`,
		"fallback": "fa6-solid:child",
	});
}

export default Component;
