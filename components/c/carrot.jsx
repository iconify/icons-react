import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh6chvztw.css';
import '../../css/b/bkqc3vq5j.css';
import '../../css/t/tbiebvz0u.css';
import '../../css/j/jxwqwqlrk.css';
import '../../css/g/ga34h2b9k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="uh6chvztw"/><path class="bkqc3vq5j"/><path class="tbiebvz0u"/><path class="jxwqwqlrk"/><path class="ga34h2b9k"/></g>`,
		"fallback": "iconito:carrot",
	});
}

export default Component;
