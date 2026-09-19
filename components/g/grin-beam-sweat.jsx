import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9pnn06xj.css';
import '../../css/t/th-akwb-u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j9pnn06xj"/><path class="th-akwb-u"/></g>`,
		"fallback": "glyphs:grin-beam-sweat",
	});
}

export default Component;
