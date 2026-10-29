import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k9f8q7bhr.css';
import '../../css/m/mmwpt_bdl.css';
import '../../css/k/ku7itzbqh.css';
import '../../css/n/naopa9blk.css';
import '../../css/p/p37n0ibjs.css';
import '../../css/r/ro0n50j-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="k9f8q7bhr wm-shadow"/><path class="mmwpt_bdl"/><path class="ku7itzbqh"/><path class="naopa9blk"/><path class="p37n0ibjs wm-shine"/><path class="ro0n50j-h wm-deco"/></g>`,
		"fallback": "withicons-sticker:archive",
	});
}

export default Component;
