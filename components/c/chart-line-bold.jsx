import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juq13gbkq.css';
import '../../css/h/hijqlccze.css';
import '../../css/u/uhfj7cbdk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="juq13gbkq"/><path class="hijqlccze"/><path class="uhfj7cbdk"/></g>`,
		"fallback": "glyphs:chart-line-bold",
	});
}

export default Component;
