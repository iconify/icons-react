import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w01qq6qdq.css';
import '../../css/m/m_r-rybts.css';
import '../../css/u/uvd1g15ov.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="rotate(-90 10 8)" class="bi12bsetm"><path class="w01qq6qdq"/><circle class="m_r-rybts"/><path class="uvd1g15ov"/></g>`,
		"fallback": "system-uicons:harddrive",
	});
}

export default Component;
