import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xke_bo0dv.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/o/osg7x0btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xke_bo0dv"/><path class="g4vvtk_cw"/><path class="osg7x0btl"/></g>`,
		"fallback": "lucide-extended:earth-duotone",
	});
}

export default Component;
