import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/q/qj82bibet.css';
import '../../css/d/dhb362b4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="qj82bibet"/><path class="dhb362b4k"/></g>`,
		"fallback": "icon-park-solid:chart-pie",
	});
}

export default Component;
