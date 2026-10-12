import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zq9754muo.css';
import '../../css/f/f4_1a0dxw.css';
import '../../css/s/sh39dzt2r.css';
import '../../css/y/ybmaxr99i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zq9754muo"/><path class="f4_1a0dxw"/><path class="sh39dzt2r"/><path class="ybmaxr99i"/></g>`,
		"fallback": "lucide-extended:handshake-duotone",
	});
}

export default Component;
