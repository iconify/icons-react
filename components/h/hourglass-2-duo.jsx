import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td8-cml1e.css';
import '../../css/s/szy8jkqkv.css';
import '../../css/t/te7ffcutq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="td8-cml1e"/><path class="szy8jkqkv"/><path class="te7ffcutq"/></g>`,
		"fallback": "glyphs:hourglass-2-duo",
	});
}

export default Component;
