import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjnwjzb4c.css';
import '../../css/h/httstt_8v.css';
import '../../css/s/sz007hbki.css';
import '../../css/c/cnm11g43b.css';
import '../../css/r/r431kzbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cjnwjzb4c"/><g clip-rule="evenodd" class="httstt_8v"><path class="sz007hbki"/><path class="cnm11g43b"/><path class="r431kzbaf"/></g></g>`,
		"fallback": "solar:headphones-square-sound-bold-duotone",
	});
}

export default Component;
