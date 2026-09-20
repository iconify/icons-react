import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxp3c3b-j.css';
import '../../css/q/qg_wop5ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxp3c3b-j"/><path class="qg_wop5ux"/>`,
		"fallback": "token:grain",
	});
}

export default Component;
