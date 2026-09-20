import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lp0fd_bci.css';
import '../../css/k/k78joibho.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lp0fd_bci"/><path class="k78joibho"/></g>`,
		"fallback": "streamline:hotel-air-conditioner",
	});
}

export default Component;
