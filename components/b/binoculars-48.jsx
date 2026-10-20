import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-31_hbov.css';
import '../../css/r/rw2_921jp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-31_hbov"/><path class="rw2_921jp"/>`,
		"fallback": "energy-icons:binoculars-48",
	});
}

export default Component;
