import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jnj0g8b4e.css';
import '../../css/g/gc_h-dblk.css';
import '../../css/m/m90cf4bfg.css';
import '../../css/t/t4aavpbvh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jnj0g8b4e"/><path class="gc_h-dblk"/><path class="m90cf4bfg"/><path class="t4aavpbvh"/></g>`,
		"fallback": "marketeq:floppy-disk-alert",
	});
}

export default Component;
