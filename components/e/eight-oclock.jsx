import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qls5yob2g.css';
import '../../css/s/se8z_dbje.css';
import '../../css/g/ggkik6xhk.css';
import '../../css/b/bsgsx4b-b.css';
import '../../css/p/p_03qcbda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qls5yob2g"/><path class="se8z_dbje"/><path class="ggkik6xhk"/><path class="bsgsx4b-b"/><path class="p_03qcbda"/></g>`,
		"fallback": "fluent-emoji-flat:eight-oclock",
	});
}

export default Component;
