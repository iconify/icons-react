import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t-91ciblk.css';
import '../../css/a/aa1oedcpg.css';
import '../../css/f/fly5esi0x.css';
import '../../css/i/i913gobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t-91ciblk wm-deco"/><path class="aa1oedcpg wm-deco"/><path class="fly5esi0x wm-k"/><path class="i913gobhf wm-a"/></g>`,
		"fallback": "withicons:battery-blueprint",
	});
}

export default Component;
