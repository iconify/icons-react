import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywausru8y.css';
import '../../css/q/q98q10buj.css';
import '../../css/j/jg4tp2bku.css';
import '../../css/e/e_0kae4yt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ywausru8y"/><path class="q98q10buj"/><path class="jg4tp2bku"/><path class="e_0kae4yt"/></g>`,
		"fallback": "glyphs:angle-double-outline",
	});
}

export default Component;
