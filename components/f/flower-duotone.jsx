import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f29fwjbso.css';
import '../../css/b/bvyv-3bdn.css';
import '../../css/n/nvb2z2bwt.css';
import '../../css/n/nhf-_jn5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f29fwjbso"/><path class="bvyv-3bdn"/><path clip-rule="evenodd" class="nvb2z2bwt"/><path class="nhf-_jn5i"/></g>`,
		"fallback": "lucide-extended:flower-duotone",
	});
}

export default Component;
