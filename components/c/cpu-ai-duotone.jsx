import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7ls9qrmc.css';
import '../../css/k/kmzkjgbdi.css';
import '../../css/z/zc8qvhbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n7ls9qrmc"/><path class="kmzkjgbdi"/><path clip-rule="evenodd" class="zc8qvhbts"/></g>`,
		"fallback": "lucide-extended:cpu-ai-duotone",
	});
}

export default Component;
