import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/daixnlptx.css';
import '../../css/o/ox5vs-b5d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="daixnlptx"/><path class="ox5vs-b5d"/></g>`,
		"fallback": "glyphs:asterisk",
	});
}

export default Component;
