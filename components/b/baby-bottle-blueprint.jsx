import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v7_rfr9_s.css';
import '../../css/t/t4z_kdmpn.css';
import '../../css/b/b2arenbhk.css';
import '../../css/h/hf0bzw-qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v7_rfr9_s wm-deco"/><path class="t4z_kdmpn wm-deco"/><path class="b2arenbhk wm-k"/><path class="hf0bzw-qm wm-a"/></g>`,
		"fallback": "withicons:baby-bottle-blueprint",
	});
}

export default Component;
