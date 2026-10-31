import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mq7zwiqhb.css';
import '../../css/j/jl73e1lrn.css';
import '../../css/i/im8flh3ra.css';
import '../../css/y/yij8ymbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mq7zwiqhb wm-shadow"/><path class="jl73e1lrn wm-shadow"/><path class="im8flh3ra"/><path class="yij8ymbvm"/></g>`,
		"fallback": "withicons-brutal:external-link",
	});
}

export default Component;
