import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyg2thb8e.css';
import '../../css/x/xmvfudb6x.css';
import '../../css/n/nep_y2bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyg2thb8e"/><path class="xmvfudb6x"/><path class="nep_y2bfc"/></g>`,
		"fallback": "lucide-extended:axe-duotone",
	});
}

export default Component;
