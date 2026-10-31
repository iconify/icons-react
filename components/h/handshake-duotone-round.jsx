import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3uk5nbqo.css';
import '../../css/y/y_i7z7pwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b3uk5nbqo"/><path class="y_i7z7pwq"/></g>`,
		"fallback": "coolicons:handshake-duotone-round",
	});
}

export default Component;
