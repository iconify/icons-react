import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo-v9lp_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo-v9lp_w"/>`,
		"fallback": "simple-icons:floatplane",
	});
}

export default Component;
