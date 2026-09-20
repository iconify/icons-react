import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e3vhn77hg.css';
import '../../css/n/ni51_iw8t.css';
import '../../css/w/wgk97yw9n.css';

const viewBox = {"width":323,"height":218};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e3vhn77hg"/><path class="ni51_iw8t"/><path class="wgk97yw9n"/></g>`,
		"fallback": "thesvg-color:dialogika",
	});
}

export default Component;
