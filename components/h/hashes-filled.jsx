import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg6y5jtyz.css';
import '../../css/j/jxx4uobjb.css';
import '../../css/z/z_q17jb9b.css';
import '../../css/z/zi2-bab_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg6y5jtyz"/><path class="jxx4uobjb"/><path class="z_q17jb9b"/><path class="zi2-bab_g"/>`,
		"fallback": "bitcoin-icons:hashes-filled",
	});
}

export default Component;
