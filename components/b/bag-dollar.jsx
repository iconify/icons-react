import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pcoc39b_k.css';
import '../../css/w/wxf56ac0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pcoc39b_k"/><path class="wxf56ac0e"/></g>`,
		"fallback": "streamline:bag-dollar",
	});
}

export default Component;
