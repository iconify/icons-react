import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ugosc9c8k.css';
import '../../css/u/uwjn2xv2w.css';
import '../../css/i/izsetltji.css';
import '../../css/q/qzau70b0b.css';
import '../../css/u/ucfeawiuu.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ugosc9c8k wm-shadow"/><path class="uwjn2xv2w"/><path class="izsetltji"/><path class="qzau70b0b"/><path class="ucfeawiuu wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`,
		"fallback": "withicons-sticker:camera",
	});
}

export default Component;
