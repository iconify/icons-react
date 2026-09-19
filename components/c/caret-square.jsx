import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nu-dcbk7y.css';
import '../../css/b/b4lrjlbwd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="nu-dcbk7y"/><path class="b4lrjlbwd"/></g>`,
		"fallback": "glyphs-poly:caret-square",
	});
}

export default Component;
