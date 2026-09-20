import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnpejlbqu.css';
import '../../css/n/nipb_750s.css';
import '../../css/z/zrz8cqb2h.css';
import '../../css/g/gkdwti2oi.css';
import '../../css/g/gelbxrbtk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnpejlbqu"/><path class="nipb_750s"/><path class="zrz8cqb2h"/><path class="gkdwti2oi"/><ellipse class="gelbxrbtk"/>`,
		"fallback": "openmoji:ct-scan",
	});
}

export default Component;
