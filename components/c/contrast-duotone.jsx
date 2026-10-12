import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/k/kzf9krbhp.css';
import '../../css/f/f5e7udz_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4vvtk_cw"/><path class="kzf9krbhp"/><path class="f5e7udz_o"/></g>`,
		"fallback": "lucide-extended:contrast-duotone",
	});
}

export default Component;
