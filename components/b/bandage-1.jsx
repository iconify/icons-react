import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h56op_7tl.css';
import '../../css/l/lhlp-obvy.css';
import '../../css/j/ja0wztbpr.css';
import '../../css/n/nmghvqs2p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h56op_7tl"/><path class="lhlp-obvy"/><path class="ja0wztbpr"/><path class="nmghvqs2p"/></g>`,
		"fallback": "glyphs-poly:bandage-1",
	});
}

export default Component;
