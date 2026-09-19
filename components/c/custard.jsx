import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6q9zcoqd.css';
import '../../css/i/iag93-b0b.css';
import '../../css/a/az4vmib3t.css';
import '../../css/k/kk_1gpbqj.css';
import '../../css/j/j2-jode6x.css';
import '../../css/b/bwb5y-8so.css';
import '../../css/r/r2x5_bc-i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o6q9zcoqd"/><path class="iag93-b0b"/><path class="az4vmib3t"/><path class="kk_1gpbqj"/><path class="j2-jode6x"/><path class="bwb5y-8so"/><path class="r2x5_bc-i"/></g>`,
		"fallback": "fluent-emoji-flat:custard",
	});
}

export default Component;
