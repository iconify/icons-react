import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mglnvccod.css';
import '../../css/x/xzv0t0boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mglnvccod"/><path class="xzv0t0boi"/>`,
		"fallback": "bx:bx-window-close",
	});
}

export default Component;
