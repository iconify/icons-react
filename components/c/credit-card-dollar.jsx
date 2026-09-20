import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mub80wbyn.css';
import '../../css/m/m9xfn8b9l.css';
import '../../css/s/s2ngt8bjc.css';
import '../../css/e/e10qxlbqz.css';
import '../../css/p/psi0xg9dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mub80wbyn"/><path class="m9xfn8b9l"/><path class="s2ngt8bjc"/><path class="e10qxlbqz"/><path class="psi0xg9dj"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-dollar",
	});
}

export default Component;
