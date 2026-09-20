import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bc6wg3_xz.css';
import '../../css/r/rb1disb2n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bc6wg3_xz"/><path class="rb1disb2n"/></g>`,
		"fallback": "streamline:dice-4",
	});
}

export default Component;
