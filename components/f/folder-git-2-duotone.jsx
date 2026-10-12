import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0spvz4cc.css';
import '../../css/v/vwvdjdb2h.css';
import '../../css/n/ne-uuubqg.css';
import '../../css/u/uq-_ho_ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0spvz4cc"/><path class="vwvdjdb2h"/><path class="ne-uuubqg"/><path class="uq-_ho_ou"/></g>`,
		"fallback": "lucide-extended:folder-git-2-duotone",
	});
}

export default Component;
