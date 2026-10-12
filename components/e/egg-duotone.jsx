import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p80rpwb5f.css';
import '../../css/d/d_vf_hbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p80rpwb5f"/><path class="d_vf_hbhw"/></g>`,
		"fallback": "lucide-extended:egg-duotone",
	});
}

export default Component;
