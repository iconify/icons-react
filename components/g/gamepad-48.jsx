import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxhse7b_h.css';
import '../../css/n/nyeck7_mh.css';
import '../../css/w/wsddmcbbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxhse7b_h"/><path class="nyeck7_mh"/><path class="wsddmcbbh"/>`,
		"fallback": "energy-icons:gamepad-48",
	});
}

export default Component;
