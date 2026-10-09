import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx3nk7mg.css';
import '../../css/h/hno73w3lb.css';
import '../../css/f/f0-wxfhvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx3nk7mg"/><path class="hno73w3lb"/><path class="f0-wxfhvi"/>`,
		"fallback": "energy-icons:canal-lock-48",
	});
}

export default Component;
