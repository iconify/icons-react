import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkfjzlvzd.css';
import '../../css/x/xbpwc-ubj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pkfjzlvzd"/><path class="xbpwc-ubj"/></g>`,
		"fallback": "glyphs:flag-outline",
	});
}

export default Component;
