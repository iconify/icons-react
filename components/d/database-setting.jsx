import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/e/ehhtfzb3b.css';
import '../../css/o/o_egw1vkx.css';
import '../../css/v/vygavxbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="mwz9-fkga"/><path class="ehhtfzb3b"/><path class="o_egw1vkx"/><path class="vygavxbon"/></g>`,
		"fallback": "hugeicons:database-setting",
	});
}

export default Component;
