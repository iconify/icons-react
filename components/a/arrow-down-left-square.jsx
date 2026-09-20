import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pvll2abwn.css';
import '../../css/q/qhln_ld2a.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pvll2abwn"/><path class="qhln_ld2a"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-down-left-square",
	});
}

export default Component;
