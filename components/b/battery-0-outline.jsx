import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg96irb-q.css';
import '../../css/e/e4mub5bik.css';
import '../../css/a/a2kumftht.css';
import '../../css/g/g99usobyl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rg96irb-q"/><path clip-rule="evenodd" class="e4mub5bik"/><path class="a2kumftht"/><path clip-rule="evenodd" class="g99usobyl"/></g>`,
		"fallback": "glyphs:battery-0-outline",
	});
}

export default Component;
