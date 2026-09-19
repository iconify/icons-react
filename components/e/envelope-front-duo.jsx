import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkzf_trfz.css';
import '../../css/y/yekt9d48r.css';
import '../../css/c/cfmjcfbng.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xkzf_trfz"/><path class="yekt9d48r"/><path class="cfmjcfbng"/></g>`,
		"fallback": "glyphs:envelope-front-duo",
	});
}

export default Component;
