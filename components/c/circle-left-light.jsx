import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/ba_vn-w1a.css';
import '../../css/h/h-u2ohbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ba_vn-w1a"/><path class="h-u2ohbco"/></g>`,
		"fallback": "lets-icons:circle-left-light",
	});
}

export default Component;
