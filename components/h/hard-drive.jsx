import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wx0fvbbbg.css';
import '../../css/q/qu95adb3c.css';
import '../../css/l/l4miuhbew.css';
import '../../css/r/rc26htbgo.css';
import '../../css/l/lmfhnu9nk.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wx0fvbbbg"/><path class="qu95adb3c"/><path class="l4miuhbew"/><path class="rc26htbgo"/><path class="lmfhnu9nk wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`,
		"fallback": "withicons-sticker:hard-drive",
	});
}

export default Component;
