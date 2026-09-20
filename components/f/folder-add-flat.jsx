import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsc84nzwy.css';
import '../../css/z/z5xf_5but.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsc84nzwy"/><path clip-rule="evenodd" class="z5xf_5but"/></g>`,
		"fallback": "streamline-color:folder-add-flat",
	});
}

export default Component;
