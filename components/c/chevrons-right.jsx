import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w3ypecbxk.css';
import '../../css/i/ioeiiddno.css';
import '../../css/g/g0i5yeb2w.css';
import '../../css/q/qw99m5brg.css';
import '../../css/o/oqjhxxbfw.css';
import '../../css/n/nvfbgacfn.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="w3ypecbxk wm-shadow"/><path class="ioeiiddno"/><path class="g0i5yeb2w"/><path class="qw99m5brg"/><path class="oqjhxxbfw wm-shine"/><path class="nvfbgacfn wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`,
		"fallback": "withicons-sticker:chevrons-right",
	});
}

export default Component;
