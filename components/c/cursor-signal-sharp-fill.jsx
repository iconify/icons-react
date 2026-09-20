import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ojq0rubuy.css';
import '../../css/n/nel6rabuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="ojq0rubuy"/><path class="nel6rabuy"/></g>`,
		"fallback": "keyline-icons:cursor-signal-sharp-fill",
	});
}

export default Component;
