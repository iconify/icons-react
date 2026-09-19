import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsdav8bkx.css';
import '../../css/z/zbo__dljt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dsdav8bkx"/><path class="zbo__dljt"/></g>`,
		"fallback": "glyphs:headphones-duo",
	});
}

export default Component;
