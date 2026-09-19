import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vso0-xb8v.css';
import '../../css/t/tlqhltbmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vso0-xb8v"/><path class="tlqhltbmw"/></g>`,
		"fallback": "icon-park:double-up",
	});
}

export default Component;
