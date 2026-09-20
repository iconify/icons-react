import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-2ge42fi.css';
import '../../css/l/llfj4f_hk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-2ge42fi"/><path class="llfj4f_hk"/>`,
		"fallback": "thesvg-color:devto-light",
	});
}

export default Component;
