import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdq2722ni.css';
import '../../css/a/a8jfprife.css';
import '../../css/g/gbiqb30yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tdq2722ni"/><path class="a8jfprife"/><path class="gbiqb30yi"/></g>`,
		"fallback": "lucide-extended:camera-duotone",
	});
}

export default Component;
