import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6ah1yb_u.css';
import '../../css/u/u9tzwj7ok.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6ah1yb_u"/><path class="u9tzwj7ok"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:download-square-outline",
	});
}

export default Component;
