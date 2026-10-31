import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n0p4rlb9a.css';
import '../../css/u/u40auj6vj.css';
import '../../css/t/tz3moq2rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n0p4rlb9a wm-shadow"/><path class="u40auj6vj wm-shadow"/><path class="tz3moq2rq"/></g>`,
		"fallback": "withicons-brutal:binary",
	});
}

export default Component;
