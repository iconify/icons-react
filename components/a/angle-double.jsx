import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jd4ffyb0r.css';
import '../../css/t/t5jmzf1ei.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="jd4ffyb0r"/><path class="t5jmzf1ei"/></g>`,
		"fallback": "glyphs-poly:angle-double",
	});
}

export default Component;
