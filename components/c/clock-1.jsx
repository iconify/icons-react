import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k18y-k1ul.css';
import '../../css/v/vv34g_e8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k18y-k1ul"/><path class="vv34g_e8w"/>`,
		"fallback": "circum:clock-1",
	});
}

export default Component;
