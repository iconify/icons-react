import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0pt84-dy.css';
import '../../css/w/wsr3lo6fe.css';
import '../../css/b/bffr92bsz.css';
import '../../css/j/j-qjlbbxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g0pt84-dy"/><path class="wsr3lo6fe"/><path class="bffr92bsz"/><path class="j-qjlbbxq"/></g>`,
		"fallback": "streamline-kameleon-color:basket-2-duo",
	});
}

export default Component;
