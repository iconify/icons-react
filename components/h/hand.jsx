import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o54a_403x.css';
import '../../css/l/lvufu95qt.css';
import '../../css/t/tgt0jgbav.css';
import '../../css/t/tjft3ex5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o54a_403x"/><path class="lvufu95qt"/><path class="tgt0jgbav"/><path class="tjft3ex5u"/></g>`,
		"fallback": "iconaut:hand",
	});
}

export default Component;
