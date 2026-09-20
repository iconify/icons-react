import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/p/pvo3733cx.css';
import '../../css/m/mdwbzzaez.css';
import '../../css/e/euagplbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="pvo3733cx"/><path class="mdwbzzaez"/><path class="euagplbru"/></g>`,
		"fallback": "streamline-plump:bug-virus-browser",
	});
}

export default Component;
