import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af0f5krwx.css';
import '../../css/x/xwbtsryeu.css';

const viewBox = {"width":80,"height":81};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="af0f5krwx"/><path class="xwbtsryeu"/></g>`,
		"fallback": "glyphs:align-slash-bold",
	});
}

export default Component;
