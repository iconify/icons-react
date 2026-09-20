import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1_8rjblk.css';
import '../../css/d/d2wh2lzqg.css';
import '../../css/o/o8pclmswx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1_8rjblk"/><path class="d2wh2lzqg"/><path class="o8pclmswx"/></g>`,
		"fallback": "streamline-flex-color:campfire",
	});
}

export default Component;
