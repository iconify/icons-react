import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh3exhboh.css';
import '../../css/s/s-z3_n-uv.css';
import '../../css/j/jqhg-ibsx.css';
import '../../css/c/cdvsuac_k.css';
import '../../css/h/hwmqk8bez.css';
import '../../css/k/k44-rzb0x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eh3exhboh"/><path class="s-z3_n-uv"/><path clip-rule="evenodd" class="jqhg-ibsx"/><path clip-rule="evenodd" class="cdvsuac_k"/><path class="hwmqk8bez"/><path clip-rule="evenodd" class="k44-rzb0x"/></g>`,
		"fallback": "glyphs:arrows-cross-outline",
	});
}

export default Component;
