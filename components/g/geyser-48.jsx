import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx3nk7mg.css';
import '../../css/i/i3ymxkbqr.css';
import '../../css/x/x7cirobba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx3nk7mg"/><path class="i3ymxkbqr"/><path class="x7cirobba"/>`,
		"fallback": "energy-icons:geyser-48",
	});
}

export default Component;
