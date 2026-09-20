import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4oopynuy.css';
import '../../css/s/sm5_fqxyr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4oopynuy"/><path class="sm5_fqxyr"/>`,
		"fallback": "lineicons:exit-down",
	});
}

export default Component;
