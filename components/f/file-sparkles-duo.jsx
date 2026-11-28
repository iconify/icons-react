import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub0_xdb6u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfp3c8bsz.css';
import '../../css/c/ct5w8kbba.css';
import '../../css/t/tkrpcdone.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ub0_xdb6u"/><g class="dt0cm9dhy primary"><path class="kfp3c8bsz"/><path class="ct5w8kbba"/><path class="tkrpcdone"/></g>`,
		"fallback": "iconaut:file-sparkles-duo",
	});
}

export default Component;
