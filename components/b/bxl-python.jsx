import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcn2r4bsf.css';
import '../../css/k/kvlndpbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcn2r4bsf"/><path class="kvlndpbwg"/>`,
		"fallback": "bx:bxl-python",
	});
}

export default Component;
