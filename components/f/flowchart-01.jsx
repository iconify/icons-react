import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l5-630b0o.css';
import '../../css/t/ta6tabc2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l5-630b0o"/><path class="ta6tabc2c"/></g>`,
		"fallback": "hugeicons:flowchart-01",
	});
}

export default Component;
