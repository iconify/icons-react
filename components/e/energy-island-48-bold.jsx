import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu1gnobxb.css';
import '../../css/r/r_8asobqy.css';
import '../../css/f/fwij3dbdn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu1gnobxb"/><path class="r_8asobqy"/><path class="fwij3dbdn"/>`,
		"fallback": "energy-icons:energy-island-48-bold",
	});
}

export default Component;
