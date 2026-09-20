import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n-s28q4ug.css';
import '../../css/l/luof9lbwe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n-s28q4ug"/><path class="luof9lbwe"/></g>`,
		"fallback": "streamline:ai-gaming-spark",
	});
}

export default Component;
