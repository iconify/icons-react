import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oy6zoybsj.css';
import '../../css/w/w2adgjlap.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oy6zoybsj"/><path class="w2adgjlap"/></g>`,
		"fallback": "glyphs:bell-add",
	});
}

export default Component;
