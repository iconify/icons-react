import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ct1vd06xk.css';
import '../../css/y/yxy1cmbif.css';
import '../../css/l/l-hwm6t3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ct1vd06xk"/><path class="yxy1cmbif"/><path class="l-hwm6t3l"/></g>`,
		"fallback": "lucide-extended:certificate-duotone",
	});
}

export default Component;
