import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/n/n2qh-g2jk.css';
import '../../css/q/q-89xvbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path clip-rule="evenodd" class="n2qh-g2jk"/><path class="q-89xvbvv"/></g>`,
		"fallback": "lucide-extended:aperture-duotone",
	});
}

export default Component;
