import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/x/x0-dx2lbz.css';
import '../../css/i/ij2u_kykf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path clip-rule="evenodd" class="x0-dx2lbz"/><path class="ij2u_kykf"/></g>`,
		"fallback": "lucide-extended:circle-stop-duotone",
	});
}

export default Component;
