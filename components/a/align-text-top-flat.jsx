import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptterccrf.css';
import '../../css/p/pr0gcbcnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptterccrf"/><path clip-rule="evenodd" class="pr0gcbcnm"/></g>`,
		"fallback": "streamline-flex-color:align-text-top-flat",
	});
}

export default Component;
