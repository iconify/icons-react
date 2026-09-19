import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb6wl9bmp.css';
import '../../css/x/xupe-9x0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb6wl9bmp"/><path class="xupe-9x0p"/>`,
		"fallback": "cil:chevron-circle-left-alt",
	});
}

export default Component;
