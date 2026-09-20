import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg-7rmowb.css';
import '../../css/x/xlepoj4bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pg-7rmowb"/><path class="xlepoj4bi"/></g>`,
		"fallback": "streamline-ultimate-color:indent-left",
	});
}

export default Component;
