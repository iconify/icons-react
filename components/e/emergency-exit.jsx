import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vjqb8qbgy.css';
import '../../css/l/lvcothbvk.css';
import '../../css/a/anfghqbkx.css';
import '../../css/p/p4xx_i96r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vjqb8qbgy"/><path class="lvcothbvk"/><path class="anfghqbkx"/><path class="p4xx_i96r"/></g>`,
		"fallback": "streamline:emergency-exit",
	});
}

export default Component;
