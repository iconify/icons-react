import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y7h_5gbkc.css';
import '../../css/f/f_u3libkv.css';
import '../../css/d/dktw7fs9p.css';
import '../../css/t/tz4nracqo.css';
import '../../css/x/xkhvfwhgx.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow y7h_5gbkc"/><path class="f_u3libkv"/><path class="dktw7fs9p"/><path class="tz4nracqo"/><path class="wm-shine xkhvfwhgx"/><path class="kn-1y6pge wm-deco"/></g>`,
		"fallback": "withicons-sticker:egg",
	});
}

export default Component;
