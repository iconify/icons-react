import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/e_47r_7lu.css';
import '../../css/d/dywcz2b9e.css';
import '../../css/w/w195kz00o.css';
import '../../css/y/yuhbhbg-h.css';
import '../../css/r/roombi3ku.css';

const viewBox = {"width":220,"height":220};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path clip-rule="evenodd" class="e_47r_7lu"/><path clip-rule="evenodd" class="dywcz2b9e"/><path clip-rule="evenodd" class="w195kz00o"/><path class="yuhbhbg-h"/><path clip-rule="evenodd" class="roombi3ku"/></g>`,
		"fallback": "thesvg-color:effect-ts-dark",
	});
}

export default Component;
