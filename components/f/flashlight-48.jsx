import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu10s8xbg.css';
import '../../css/l/lnj0vzkpp.css';
import '../../css/e/e8x7bixqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu10s8xbg"/><path class="lnj0vzkpp"/><path class="e8x7bixqn"/>`,
		"fallback": "energy-icons:flashlight-48",
	});
}

export default Component;
