import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_3yj8p9m.css';
import '../../css/h/hgo80xbyl.css';
import '../../css/b/b-fp7ubre.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_3yj8p9m"/><path class="hgo80xbyl"/><path class="b-fp7ubre"/></g>`,
		"fallback": "glyphs:inbox-1-duo",
	});
}

export default Component;
