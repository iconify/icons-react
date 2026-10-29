import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yko8klxft.css';
import '../../css/z/zjvivh4ag.css';
import '../../css/f/fg72kubvl.css';
import '../../css/v/vmvmppbhb.css';
import '../../css/c/czch8qbls.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow yko8klxft"/><path class="zjvivh4ag"/><path class="fg72kubvl"/><path class="vmvmppbhb"/><path class="czch8qbls wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`,
		"fallback": "withicons-sticker:infinity",
	});
}

export default Component;
