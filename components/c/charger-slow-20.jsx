import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6njav50m.css';
import '../../css/o/oljydkxyh.css';
import '../../css/x/xoyjgxgiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6njav50m"/><path class="oljydkxyh"/><path class="xoyjgxgiq"/>`,
		"fallback": "energy-icons:charger-slow-20",
	});
}

export default Component;
