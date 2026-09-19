import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4stb82oo.css';
import '../../css/w/w2gwy9tfq.css';
import '../../css/g/go_5mac4m.css';
import '../../css/k/k-cb5ojsx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4stb82oo"/><path clip-rule="evenodd" class="w2gwy9tfq"/><path class="go_5mac4m"/><path class="k-cb5ojsx"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-bracket-start",
	});
}

export default Component;
