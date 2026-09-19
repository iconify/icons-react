import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmrnkkbib.css';
import '../../css/u/ui28tsbuu.css';
import '../../css/z/zozaj1o1q.css';
import '../../css/v/v0i8j_brt.css';
import '../../css/t/tatgggbkl.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qmrnkkbib"/><path class="ui28tsbuu"/><circle class="zozaj1o1q"/><circle class="v0i8j_brt"/><circle class="tatgggbkl"/></g>`,
		"fallback": "et:browser",
	});
}

export default Component;
