import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nm73mnbmi.css';
import '../../css/k/kgeq-sksu.css';
import '../../css/l/lo5duc4ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nm73mnbmi"/><path class="kgeq-sksu"/><path class="lo5duc4ee"/></g>`,
		"fallback": "lucide-extended:flashlight-duotone",
	});
}

export default Component;
