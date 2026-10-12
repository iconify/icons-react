import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_nwa-bhj.css';
import '../../css/z/zt0zzubpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_nwa-bhj"/><path clip-rule="evenodd" class="zt0zzubpw"/></g>`,
		"fallback": "lucide-extended:command-duotone",
	});
}

export default Component;
