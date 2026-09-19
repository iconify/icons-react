import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/d7s3wzb3k.css';
import '../../css/h/hcr36eogo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="d7s3wzb3k"/><path class="hcr36eogo"/></g>`,
		"fallback": "glyphs-poly:equals",
	});
}

export default Component;
