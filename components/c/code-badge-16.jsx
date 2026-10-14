import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv2r58bup.css';
import '../../css/k/k0khjcc8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv2r58bup"/><path class="k0khjcc8h"/>`,
		"fallback": "octicon:code-badge-16",
	});
}

export default Component;
