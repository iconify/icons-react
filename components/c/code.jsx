import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/arn4pmjgn.css';
import '../../css/a/akigzzbpt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="arn4pmjgn"/><path class="akigzzbpt"/></g>`,
		"fallback": "glyphs-poly:code",
	});
}

export default Component;
