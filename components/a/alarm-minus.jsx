import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_gkeb7e.css';
import '../../css/g/g-btfib-b.css';
import '../../css/t/t8uudi0mb.css';
import '../../css/q/qnfpgub0n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n2_gkeb7e"/><path class="g-btfib-b"/><path class="t8uudi0mb"/><path class="qnfpgub0n"/></g>`,
		"fallback": "glyphs-poly:alarm-minus",
	});
}

export default Component;
