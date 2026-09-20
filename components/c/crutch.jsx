import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b_f_r4bfq.css';
import '../../css/n/n6b1y6bdo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b_f_r4bfq"/><path class="n6b1y6bdo"/></g>`,
		"fallback": "streamline:crutch",
	});
}

export default Component;
