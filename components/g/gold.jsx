import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w2rjvtbym.css';
import '../../css/n/ncqy7j8cq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w2rjvtbym"/><path class="ncqy7j8cq"/></g>`,
		"fallback": "streamline:gold",
	});
}

export default Component;
