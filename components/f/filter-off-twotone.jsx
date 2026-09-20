import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3668i.css';
import '../../css/t/t5pxry.css';
import '../../css/f/fp70ia.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8m5WkcNs"><path class="b3668i t5pxry"/><path class="fp70ia oxx-om t5pxry"/></mask></defs><path mask="url(#SVG8m5WkcNs)" class="botfzx"/><path class="fp70ia gd_4-q t5pxry"/>`,
		"fallback": "line-md:filter-off-twotone",
	});
}

export default Component;
