import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mv5l45bxk.css';
import '../../css/t/tx33t7bhf.css';
import '../../css/v/vc9s1v6oo.css';
import '../../css/k/kmu2ot3-z.css';
import '../../css/y/ytwv9bb9n.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mv5l45bxk wm-shadow"/><path class="tx33t7bhf"/><path class="vc9s1v6oo"/><path class="kmu2ot3-z"/><path class="ytwv9bb9n"/><path class="fpr348e2o wm-deco"/></g>`,
		"fallback": "withicons-sticker:chart-donut",
	});
}

export default Component;
