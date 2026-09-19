import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c13u5vq6r.css';
import '../../css/q/q7s39abfc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c13u5vq6r"/><path class="q7s39abfc"/></g>`,
		"fallback": "si-glyph:axe",
	});
}

export default Component;
