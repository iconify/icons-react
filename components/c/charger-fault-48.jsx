import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnljhyiuk.css';
import '../../css/w/wxymvdbcb.css';
import '../../css/e/eeqb4o0lv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnljhyiuk"/><path class="wxymvdbcb"/><path class="eeqb4o0lv"/>`,
		"fallback": "energy-icons:charger-fault-48",
	});
}

export default Component;
