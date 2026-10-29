import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n31s5dpxu.css';
import '../../css/z/ze5gik9yg.css';
import '../../css/c/cxi71ptin.css';
import '../../css/v/vzkkq6lna.css';
import '../../css/g/ght276bgu.css';
import '../../css/y/y_zzz-xtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="n31s5dpxu wm-shadow"/><path class="ze5gik9yg"/><path class="cxi71ptin"/><path class="vzkkq6lna"/><path class="ght276bgu wm-shine"/><path class="wm-deco y_zzz-xtc"/></g>`,
		"fallback": "withicons-sticker:eye",
	});
}

export default Component;
