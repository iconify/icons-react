import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv2r58bup.css';
import '../../css/n/nz-7s6boo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv2r58bup"/><path class="nz-7s6boo"/>`,
		"fallback": "octicon:code-square-16",
	});
}

export default Component;
