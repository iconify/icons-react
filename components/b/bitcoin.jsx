import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lv7116bbl.css';
import '../../css/t/teu-s7guz.css';
import '../../css/l/lfoy-8bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lv7116bbl wm-shadow"/><path class="teu-s7guz wm-shadow"/><path class="lfoy-8bug"/></g>`,
		"fallback": "withicons-brutal:bitcoin",
	});
}

export default Component;
