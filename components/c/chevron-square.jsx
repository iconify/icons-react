import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t7besvb1f.css';
import '../../css/q/qe5gyrozs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t7besvb1f"/><path class="qe5gyrozs"/></g>`,
		"fallback": "glyphs:chevron-square",
	});
}

export default Component;
