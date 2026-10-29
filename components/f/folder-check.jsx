import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/q/qad11fbmm.css';
import '../../css/e/e9ml9obtr.css';
import '../../css/z/zhxyjhb8k.css';
import '../../css/g/gvvatr54z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="qad11fbmm"/><path class="e9ml9obtr"/><path class="wm-shine zhxyjhb8k"/><path class="gvvatr54z wm-deco"/></g>`,
		"fallback": "withicons-sticker:folder-check",
	});
}

export default Component;
