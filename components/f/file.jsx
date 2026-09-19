import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb5rj7bts.css';
import '../../css/q/q9cyv3brp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cb5rj7bts"/><path class="q9cyv3brp"/></g>`,
		"fallback": "glyphs-poly:file",
	});
}

export default Component;
