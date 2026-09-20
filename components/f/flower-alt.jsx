import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kt8i0zzoz.css';
import '../../css/z/zk8838o_p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kt8i0zzoz"/><path class="zk8838o_p"/></g>`,
		"fallback": "streamline:flower-alt",
	});
}

export default Component;
