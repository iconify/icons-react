import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_jp68bwx.css';
import '../../css/u/ui8pwhfnc.css';
import '../../css/i/i392j1bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_jp68bwx"/><path class="ui8pwhfnc"/><path class="i392j1bbq"/></g>`,
		"fallback": "reicon:arrow-filled",
	});
}

export default Component;
