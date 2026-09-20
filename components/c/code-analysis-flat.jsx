import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq41subhy.css';
import '../../css/d/dmweemcda.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lq41subhy"/><path clip-rule="evenodd" class="dmweemcda"/></g>`,
		"fallback": "streamline-flex-color:code-analysis-flat",
	});
}

export default Component;
