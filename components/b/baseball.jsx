import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uynw62asb.css';
import '../../css/g/g3d2r77id.css';
import '../../css/e/eeq63qngk.css';
import '../../css/m/m23qtybqe.css';
import '../../css/k/k3ede68cu.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="uynw62asb wm-shadow"/><path class="g3d2r77id"/><path class="eeq63qngk"/><path class="m23qtybqe"/><path class="k3ede68cu wm-shine"/><path class="fpr348e2o wm-deco"/></g>`,
		"fallback": "withicons-sticker:baseball",
	});
}

export default Component;
