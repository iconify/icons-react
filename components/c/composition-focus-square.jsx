import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6cqg183h.css';
import '../../css/j/jsmok9b7b.css';
import '../../css/w/wqm7zyx1m.css';
import '../../css/p/p7t_lvdto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r6cqg183h"/><path class="jsmok9b7b"/><path class="wqm7zyx1m"/><path class="p7t_lvdto"/></g>`,
		"fallback": "streamline-ultimate-color:composition-focus-square",
	});
}

export default Component;
