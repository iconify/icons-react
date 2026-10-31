import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c-pnitbjl.css';
import '../../css/c/c1bk-gjdr.css';
import '../../css/z/zm2kk9bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c-pnitbjl wm-shadow"/><path class="c1bk-gjdr wm-shadow"/><path class="zm2kk9bpg"/></g>`,
		"fallback": "withicons-brutal:align-right",
	});
}

export default Component;
