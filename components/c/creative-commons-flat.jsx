import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8psh3biy.css';
import '../../css/r/rr2w20b9o.css';
import '../../css/i/iocftcc9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8psh3biy"/><path clip-rule="evenodd" class="rr2w20b9o"/><path clip-rule="evenodd" class="iocftcc9b"/></g>`,
		"fallback": "streamline-plump-color:creative-commons-flat",
	});
}

export default Component;
