import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0lmw93xt.css';
import '../../css/a/agsogrbvx.css';
import '../../css/z/zim7z5jii.css';

const viewBox = {"width":197,"height":44};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="r0lmw93xt"/><path class="agsogrbvx"/><path class="zim7z5jii"/></g>`,
		"fallback": "thesvg-color:flatnotes",
	});
}

export default Component;
