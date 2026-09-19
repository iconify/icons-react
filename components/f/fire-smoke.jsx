import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qqsuixb9t.css';
import '../../css/w/w2_lsgbdw.css';
import '../../css/b/bt2my2z8c.css';
import '../../css/j/jvapn4bkn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qqsuixb9t"/><path class="w2_lsgbdw"/><path class="bt2my2z8c"/><path class="jvapn4bkn"/></g>`,
		"fallback": "glyphs-poly:fire-smoke",
	});
}

export default Component;
