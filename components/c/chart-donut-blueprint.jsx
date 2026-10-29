import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nuzg-q53c.css';
import '../../css/i/i83_97n8l.css';
import '../../css/x/x-sy9fffb.css';
import '../../css/o/oueb3-o3f.css';
import '../../css/i/iea3pz1nl.css';
import '../../css/i/iars2i1ui.css';
import '../../css/f/fwcl73bon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nuzg-q53c wm-deco"/><path class="i83_97n8l wm-deco"/><path class="wm-deco x-sy9fffb"/><path class="oueb3-o3f wm-k"/><path class="iea3pz1nl wm-a"/><path class="iars2i1ui wm-k"/><path class="fwcl73bon wm-a"/></g>`,
		"fallback": "withicons:chart-donut-blueprint",
	});
}

export default Component;
