import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7olx61gw.css';
import '../../css/a/ary-4bknz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7olx61gw"/><path class="ary-4bknz"/>`,
		"fallback": "energy-icons:battery-module-48",
	});
}

export default Component;
