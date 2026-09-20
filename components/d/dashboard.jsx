import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0wpabctl.css';
import '../../css/n/nblgfwbys.css';
import '../../css/r/rcidtuiap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0wpabctl"/><path class="nblgfwbys"/><path class="rcidtuiap"/>`,
		"fallback": "stash:dashboard",
	});
}

export default Component;
