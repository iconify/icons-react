import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr5g80bwz.css';
import '../../css/m/mftdyfxbo.css';
import '../../css/n/nn4w9sb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gr5g80bwz"/><path class="mftdyfxbo"/><path class="nn4w9sb3d"/></g>`,
		"fallback": "lucide-extended:captions-duotone",
	});
}

export default Component;
