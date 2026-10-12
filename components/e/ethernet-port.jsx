import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwesjxjko.css';
import '../../css/b/bjjq40bze.css';
import '../../css/y/yy5uv0eya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwesjxjko"/><path class="bjjq40bze"/><path class="yy5uv0eya"/></g>`,
		"fallback": "andrsrxn:ethernet-port",
	});
}

export default Component;
