import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-0vnyb9w.css';
import '../../css/u/uh3jeubfp.css';
import '../../css/n/nnrxwwb2a.css';
import '../../css/c/cvcti8xca.css';
import '../../css/i/i3sr6la4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-0vnyb9w"/><path class="uh3jeubfp"/><path class="nnrxwwb2a"/><path class="cvcti8xca"/><path class="i3sr6la4p"/></g>`,
		"fallback": "lucide-extended:file-user-duotone",
	});
}

export default Component;
