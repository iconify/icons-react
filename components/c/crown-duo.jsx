import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh9z62bhv.css';
import '../../css/n/n0qaccbrc.css';
import '../../css/d/dfsxo8ehe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xh9z62bhv"/><path class="n0qaccbrc"/><path class="dfsxo8ehe"/></g>`,
		"fallback": "glyphs:crown-duo",
	});
}

export default Component;
