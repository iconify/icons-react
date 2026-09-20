import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t1wn25b_v.css';
import '../../css/f/fkshqcc2h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t1wn25b_v"/><path class="fkshqcc2h"/></g>`,
		"fallback": "streamline:android",
	});
}

export default Component;
