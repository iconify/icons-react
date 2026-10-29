import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yrjwchbsz.css';
import '../../css/s/snbzacpmh.css';
import '../../css/b/bezdy0b3d.css';
import '../../css/x/xmrd7mjdn.css';
import '../../css/i/ivuile69f.css';
import '../../css/m/mhcd6s9cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yrjwchbsz"/><path class="snbzacpmh wm-deco"/><path class="bezdy0b3d wm-k"/><path class="wm-a xmrd7mjdn"/><path class="ivuile69f wm-k"/><path class="mhcd6s9cd wm-a"/></g>`,
		"fallback": "withicons:forward-blueprint",
	});
}

export default Component;
