import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh8c69u5a.css';
import '../../css/v/vbtn2cchy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sh8c69u5a"/><path class="vbtn2cchy"/></g>`,
		"fallback": "glyphs:align-items-side-duo",
	});
}

export default Component;
