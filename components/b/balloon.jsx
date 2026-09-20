import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un6svxvcn.css';
import '../../css/t/tl934i07k.css';
import '../../css/z/zux1yxq_s.css';
import '../../css/y/y9_5mdb2p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="un6svxvcn"/><path class="tl934i07k"/><path class="zux1yxq_s"/><path class="y9_5mdb2p"/></g>`,
		"fallback": "streamline-color:balloon",
	});
}

export default Component;
