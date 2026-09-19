import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovu-g_vkt.css';
import '../../css/u/uivx-nb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovu-g_vkt"/><path class="uivx-nb_o"/>`,
		"fallback": "circum:circle-minus",
	});
}

export default Component;
