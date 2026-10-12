import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/su4li0btr.css';
import '../../css/m/m8jq7qbyn.css';
import '../../css/s/s6-v_jbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="su4li0btr"/><path class="m8jq7qbyn"/><path class="s6-v_jbin"/></g>`,
		"fallback": "lucide-extended:flame-kindling-duotone",
	});
}

export default Component;
