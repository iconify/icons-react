import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m6o00pbec.css';
import '../../css/f/fg2acgb-l.css';
import '../../css/v/vlp9v8btv.css';
import '../../css/c/cwsn5mb2e.css';
import '../../css/e/ebgwytbri.css';
import '../../css/h/h-s7skbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="m6o00pbec wm-shadow"/><path class="fg2acgb-l"/><path class="vlp9v8btv"/><path class="cwsn5mb2e"/><path class="ebgwytbri wm-shine"/><path class="h-s7skbhx wm-deco"/></g>`,
		"fallback": "withicons-sticker:indent-decrease",
	});
}

export default Component;
