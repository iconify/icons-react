import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n351nwb6r.css';
import '../../css/z/zw_v3acsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n351nwb6r"/><path class="zw_v3acsi"/>`,
		"fallback": "uim:hospital-symbol",
	});
}

export default Component;
