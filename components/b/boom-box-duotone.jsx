import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoxa5dlty.css';
import '../../css/r/rbxd60zrd.css';
import '../../css/x/xy2-b82ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xoxa5dlty"/><path clip-rule="evenodd" class="rbxd60zrd"/><path class="xy2-b82ip"/></g>`,
		"fallback": "lucide-extended:boom-box-duotone",
	});
}

export default Component;
