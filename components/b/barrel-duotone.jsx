import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uew948jvc.css';
import '../../css/r/r155nbcpm.css';
import '../../css/x/xkosiwb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uew948jvc"/><path class="r155nbcpm"/><path class="xkosiwb3r"/></g>`,
		"fallback": "lucide-extended:barrel-duotone",
	});
}

export default Component;
