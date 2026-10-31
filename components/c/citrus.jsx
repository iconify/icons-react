import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s-8rzmitj.css';
import '../../css/a/ay6zfx3qi.css';
import '../../css/r/rxiflsmfe.css';
import '../../css/m/m6vwfnbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s-8rzmitj wm-shadow"/><path class="ay6zfx3qi wm-shadow"/><path class="rxiflsmfe"/><path class="m6vwfnbwn"/></g>`,
		"fallback": "withicons-brutal:citrus",
	});
}

export default Component;
