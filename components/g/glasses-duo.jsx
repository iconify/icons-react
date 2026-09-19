import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a380nzbvb.css';
import '../../css/t/tg-e1ybvw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a380nzbvb"/><path class="tg-e1ybvw"/></g>`,
		"fallback": "glyphs:glasses-duo",
	});
}

export default Component;
