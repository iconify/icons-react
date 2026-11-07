import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5nefr4oy.css';
import '../../css/u/uyy-03b_b.css';
import '../../css/f/fxfgl_6kl.css';
import '../../css/v/vep2w7bwl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tt7vcqswa.css';
import '../../css/t/tzi-ertvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5nefr4oy"/><path class="uyy-03b_b"/><path class="fxfgl_6kl"/><path class="vep2w7bwl"/><g class="xtpeb-edw"><path class="tt7vcqswa"/><path class="tzi-ertvs"/></g>`,
		"fallback": "solar:grip-horizontal-bold-duotone",
	});
}

export default Component;
