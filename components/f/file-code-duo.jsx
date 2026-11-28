import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy37-4bza.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e9q6w_2ei.css';
import '../../css/i/i6bjthbsa.css';
import '../../css/j/j0u-0_o-r.css';
import '../../css/s/sq7ldu1vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xy37-4bza"/><g class="dt0cm9dhy primary"><path class="e9q6w_2ei"/><path class="i6bjthbsa"/><path class="j0u-0_o-r"/><path class="sq7ldu1vw"/></g>`,
		"fallback": "iconaut:file-code-duo",
	});
}

export default Component;
