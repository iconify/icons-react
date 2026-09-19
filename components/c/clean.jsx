import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lhzk0on9c.css';
import '../../css/b/b544j2l2n.css';
import '../../css/l/lkva_fbsk.css';
import '../../css/i/icsnh8bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lhzk0on9c"/><path class="b544j2l2n"/><path class="lkva_fbsk"/><path class="icsnh8bsq"/></g>`,
		"fallback": "hugeicons:clean",
	});
}

export default Component;
