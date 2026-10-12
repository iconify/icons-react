import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9_5lsyuf.css';
import '../../css/s/s5e2c7b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9_5lsyuf"/><path class="s5e2c7b1j"/></g>`,
		"fallback": "lucide-extended:gallery-vertical-end-duotone",
	});
}

export default Component;
