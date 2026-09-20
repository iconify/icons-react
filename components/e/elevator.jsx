import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp4xchyxl.css';
import '../../css/y/yx24jabbz.css';
import '../../css/p/pwo544lim.css';
import '../../css/k/kszctgiks.css';
import '../../css/z/z_6jgwbpi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bp4xchyxl"/><path class="yx24jabbz"/><path class="pwo544lim"/><path class="kszctgiks"/><path class="z_6jgwbpi"/></g>`,
		"fallback": "streamline-flex-color:elevator",
	});
}

export default Component;
