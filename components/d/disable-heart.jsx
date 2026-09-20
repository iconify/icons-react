import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i25l3ub3r.css';
import '../../css/f/fx4ql9bzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i25l3ub3r"/><path class="fx4ql9bzu"/></g>`,
		"fallback": "streamline-color:disable-heart",
	});
}

export default Component;
