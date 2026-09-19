import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q--rc_bic.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q--rc_bic"/>`,
		"fallback": "fa6-solid:child-dress",
	});
}

export default Component;
