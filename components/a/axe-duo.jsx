import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0de-9ssb.css';
import '../../css/k/k1k5x7c4q.css';
import '../../css/o/o7qoddckf.css';
import '../../css/x/xkz03gb0d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0de-9ssb"/><path class="k1k5x7c4q"/><path class="o7qoddckf"/><path class="xkz03gb0d"/></g>`,
		"fallback": "glyphs:axe-duo",
	});
}

export default Component;
