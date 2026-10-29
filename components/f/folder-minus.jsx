import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/j/jdoc03bje.css';
import '../../css/i/ige-6obsy.css';
import '../../css/z/zhxyjhb8k.css';
import '../../css/w/w_3_8efhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="jdoc03bje"/><path class="ige-6obsy"/><path class="wm-shine zhxyjhb8k"/><path class="w_3_8efhl wm-deco"/></g>`,
		"fallback": "withicons-sticker:folder-minus",
	});
}

export default Component;
