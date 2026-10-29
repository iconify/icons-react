import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/ah77enbya.css';
import '../../css/k/kq4w_rbdt.css';
import '../../css/n/nq9v6efhb.css';
import '../../css/e/ed1qm5bik.css';
import '../../css/k/keb3qziop.css';
import '../../css/a/anc8o49yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ah77enbya wm-shadow"/><path class="kq4w_rbdt"/><path class="nq9v6efhb"/><path class="ed1qm5bik"/><path class="keb3qziop wm-shine"/><path class="anc8o49yc wm-deco"/></g>`,
		"fallback": "withicons-sticker:avatar-monster-fluffy",
	});
}

export default Component;
