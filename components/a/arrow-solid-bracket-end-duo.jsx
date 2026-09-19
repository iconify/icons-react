import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nydamjtci.css';
import '../../css/f/fob34gnlx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nydamjtci"/><path class="fob34gnlx"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-end-duo",
	});
}

export default Component;
