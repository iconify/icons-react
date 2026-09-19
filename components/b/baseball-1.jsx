import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbaw4rvsq.css';
import '../../css/e/ep44yib3r.css';
import '../../css/u/ut-8af0wp.css';
import '../../css/g/g56ggcc8j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wbaw4rvsq"/><path class="ep44yib3r"/><path class="ut-8af0wp"/><path class="g56ggcc8j"/></g>`,
		"fallback": "glyphs-poly:baseball-1",
	});
}

export default Component;
