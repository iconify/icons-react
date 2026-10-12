import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-49kub1n.css';
import '../../css/l/l3ti7bc2l.css';
import '../../css/z/z-7f7hehn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-49kub1n"/><path class="l3ti7bc2l"/><path class="z-7f7hehn"/></g>`,
		"fallback": "lucide-extended:headset-duotone",
	});
}

export default Component;
