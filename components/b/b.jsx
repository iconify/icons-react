import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s2rdv7bkl.css';
import '../../css/r/rcgemvexj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s2rdv7bkl"/><path class="rcgemvexj"/></g>`,
		"fallback": "glyphs:b",
	});
}

export default Component;
