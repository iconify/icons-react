import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zzxodob-s.css';
import '../../css/h/hjfiyp-px.css';
import '../../css/x/xunpn8plw.css';
import '../../css/g/gp9y_jbjm.css';
import '../../css/t/t2m5facrk.css';
import '../../css/h/h17ueb5ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zzxodob-s"/><path class="hjfiyp-px wm-deco"/><path class="wm-k xunpn8plw"/><path class="gp9y_jbjm wm-a"/><path class="t2m5facrk wm-k"/><path class="h17ueb5ny wm-a"/></g>`,
		"fallback": "withicons:chevrons-right-blueprint",
	});
}

export default Component;
