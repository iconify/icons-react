import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj_w8hblv.css';
import '../../css/o/okc6r4m0z.css';
import '../../css/n/ns0x3kbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lj_w8hblv"/><path class="okc6r4m0z"/><path class="ns0x3kbdh"/></g>`,
		"fallback": "lucide-extended:balloon-duotone",
	});
}

export default Component;
