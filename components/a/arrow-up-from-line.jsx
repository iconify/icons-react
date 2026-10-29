import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/ni-ia8bfv.css';
import '../../css/d/dtuy-3yow.css';
import '../../css/v/v13r9pbwe.css';
import '../../css/z/zsgx8xboo.css';
import '../../css/h/h-u9aob1k.css';
import '../../css/d/dv114zb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ni-ia8bfv wm-shadow"/><path class="dtuy-3yow"/><path class="v13r9pbwe"/><path class="zsgx8xboo"/><path class="h-u9aob1k wm-shine"/><path class="dv114zb8r wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-up-from-line",
	});
}

export default Component;
