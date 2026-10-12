import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozpu67bss.css';
import '../../css/s/s-og5ebwk.css';
import '../../css/h/ha-v643ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozpu67bss"/><path class="s-og5ebwk"/><path class="ha-v643ns"/></g>`,
		"fallback": "andrsrxn:folder-pin",
	});
}

export default Component;
