import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te6irpbnf.css';
import '../../css/f/frjjddcio.css';
import '../../css/p/pt6xl9_us.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te6irpbnf"/><path class="frjjddcio"/><path class="pt6xl9_us"/></g>`,
		"fallback": "glyphs:accessible-duo",
	});
}

export default Component;
