import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txva6ic1h.css';
import '../../css/m/mgl97wcfv.css';
import '../../css/s/s805e4aqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txva6ic1h"/><path class="mgl97wcfv"/><path class="s805e4aqh"/></g>`,
		"fallback": "lucide-extended:closed-caption-duotone",
	});
}

export default Component;
