import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/drmy_5tib.css';
import '../../css/r/rpqml8but.css';
import '../../css/l/lkm2aob1b.css';
import '../../css/j/j6nyc2a5g.css';
import '../../css/n/nouhnxb7k.css';
import '../../css/t/tjruv_bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="drmy_5tib wm-shadow"/><path class="rpqml8but"/><path class="lkm2aob1b"/><path class="j6nyc2a5g"/><path class="nouhnxb7k wm-shine"/><path class="tjruv_bvz wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-down-to-line",
	});
}

export default Component;
