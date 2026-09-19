import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/le8r1fb7t.css';
import '../../css/q/qfmv5tb9f.css';
import '../../css/k/kb5x2_bxy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="le8r1fb7t"/><path class="qfmv5tb9f"/><path class="kb5x2_bxy"/></g>`,
		"fallback": "glyphs-poly:bars-offset-2",
	});
}

export default Component;
