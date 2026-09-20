import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz18_1bea.css';
import '../../css/p/p49d8zb-f.css';
import '../../css/v/v3z8t2bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz18_1bea"/><path class="p49d8zb-f"/><path class="v3z8t2bgq"/>`,
		"fallback": "streamline-freehand:app-window-wireless-problem",
	});
}

export default Component;
