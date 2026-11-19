import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7o91l-2l.css';
import '../../css/s/s9-d6cktg.css';
import '../../css/l/lqkrgebwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7o91l-2l"/><path class="s9-d6cktg"/><path class="lqkrgebwv"/></g>`,
		"fallback": "andrsrxn:file-symlink",
	});
}

export default Component;
