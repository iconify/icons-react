import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjcl_bc7r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjcl_bc7r"/>`,
		"fallback": "fa7-brands:app-store",
	});
}

export default Component;
