import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c9ugt2t7n.css';
import '../../css/d/dbldgwbon.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c9ugt2t7n"/><path class="dbldgwbon"/></g>`,
		"fallback": "glyphs:flip-1",
	});
}

export default Component;
