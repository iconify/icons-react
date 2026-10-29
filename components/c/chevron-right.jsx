import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jwd5j7yph.css';
import '../../css/h/h-4ghvv5l.css';
import '../../css/l/l6r9xdbni.css';
import '../../css/b/baong0m8p.css';
import '../../css/e/e9deqlbtn.css';
import '../../css/x/xk3nt5bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jwd5j7yph wm-shadow"/><path class="h-4ghvv5l"/><path class="l6r9xdbni"/><path class="baong0m8p"/><path class="e9deqlbtn wm-shine"/><path class="wm-deco xk3nt5bwm"/></g>`,
		"fallback": "withicons-sticker:chevron-right",
	});
}

export default Component;
