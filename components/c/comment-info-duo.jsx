import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5_9cmqso.css';
import '../../css/o/og6-izz4a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5_9cmqso"/><path class="og6-izz4a"/></g>`,
		"fallback": "glyphs:comment-info-duo",
	});
}

export default Component;
