import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3jo4db_f.css';
import '../../css/c/cdrjiw5-p.css';
import '../../css/p/p11u22bqk.css';
import '../../css/t/tb6yzhyny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i3jo4db_f"/><rect class="cdrjiw5-p"/><path class="p11u22bqk"/><path class="tb6yzhyny"/></g>`,
		"fallback": "andrsrxn:crown",
	});
}

export default Component;
