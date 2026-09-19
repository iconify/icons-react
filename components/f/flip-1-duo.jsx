import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7if260ae.css';
import '../../css/x/xox5c7kpu.css';
import '../../css/k/kij8agj6l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7if260ae"/><path class="xox5c7kpu"/><path class="kij8agj6l"/></g>`,
		"fallback": "glyphs:flip-1-duo",
	});
}

export default Component;
