import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n6xp5s5zm.css';
import '../../css/m/mvplye3mo.css';
import '../../css/u/u8s-gjblx.css';
import '../../css/v/vmch0iu9s.css';
import '../../css/x/xtnakt1xw.css';
import '../../css/y/ytqn3q3es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="n6xp5s5zm wm-shadow"/><path class="mvplye3mo"/><path class="u8s-gjblx"/><path class="vmch0iu9s"/><path class="wm-shine xtnakt1xw"/><path class="wm-deco ytqn3q3es"/></g>`,
		"fallback": "withicons-sticker:croissant",
	});
}

export default Component;
