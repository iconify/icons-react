import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwj-tdbmb.css';
import '../../css/k/k4o7aepui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwj-tdbmb"/><path class="k4o7aepui"/>`,
		"fallback": "bx:archive-in",
	});
}

export default Component;
