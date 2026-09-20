import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlfji8b7w.css';
import '../../css/t/tuzkwnb6p.css';
import '../../css/j/j9ftxgnmm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xlfji8b7w"/><path class="tuzkwnb6p"/><path clip-rule="evenodd" class="j9ftxgnmm"/></g>`,
		"fallback": "streamline-flex-color:inbox-favorite-flat",
	});
}

export default Component;
