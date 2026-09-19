import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e183-wb1u.css';
import '../../css/q/qv404742w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e183-wb1u"/><path class="qv404742w"/></g>`,
		"fallback": "glyphs-poly:flag",
	});
}

export default Component;
