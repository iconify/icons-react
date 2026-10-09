import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgwo3tb-z.css';
import '../../css/w/wz53a60hh.css';
import '../../css/v/v1p4ihz6t.css';
import '../../css/i/ifcw9tbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgwo3tb-z"/><path class="wz53a60hh"/><path class="v1p4ihz6t"/><path class="ifcw9tbtd"/>`,
		"fallback": "energy-icons:concentrated-solar-48",
	});
}

export default Component;
