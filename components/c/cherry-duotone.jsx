import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pb9hvpzxz.css';
import '../../css/l/l_wmtobsh.css';
import '../../css/u/u3pnkz42x.css';
import '../../css/c/c39ja90-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pb9hvpzxz"/><path class="l_wmtobsh"/><path class="u3pnkz42x"/><path class="c39ja90-l"/></g>`,
		"fallback": "lucide-extended:cherry-duotone",
	});
}

export default Component;
