import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/csvxybjlm.css';
import '../../css/n/nxe16lb4m.css';
import '../../css/j/j9ed8cc4e.css';
import '../../css/u/ulkddq-6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="csvxybjlm"/><path class="nxe16lb4m"/><path class="j9ed8cc4e"/><path class="ulkddq-6v"/></g>`,
		"fallback": "hugeicons:cheese",
	});
}

export default Component;
