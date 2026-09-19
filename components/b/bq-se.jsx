import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3366n1uv.css';
import '../../css/r/rg95-461t.css';
import '../../css/h/h6ubuz71n.css';
import '../../css/u/uepxqvbzo.css';
import '../../css/a/axrnembkx.css';
import '../../css/s/s5a2bcbjc.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l3366n1uv"/><path class="rg95-461t"/><path class="h6ubuz71n"/><path class="uepxqvbzo"/><path class="axrnembkx"/><path clip-rule="evenodd" class="s5a2bcbjc"/></g>`,
		"fallback": "flagpack:bq-se",
	});
}

export default Component;
