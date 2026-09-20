import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnr7fptxp.css';
import '../../css/w/wl2c1p1go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnr7fptxp"/><path class="wl2c1p1go"/>`,
		"fallback": "stash:feed",
	});
}

export default Component;
