import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umcbrdrzf.css';
import '../../css/n/nwmd57bti.css';
import '../../css/t/thdncb4gb.css';
import '../../css/i/i8kflg27r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umcbrdrzf"/><path class="nwmd57bti"/><path class="thdncb4gb"/><path class="i8kflg27r"/>`,
		"fallback": "energy-icons:camera-switch-20",
	});
}

export default Component;
