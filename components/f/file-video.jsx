import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/h/hag01gbkb.css';
import '../../css/t/t03dh6bfh.css';
import '../../css/k/ku2x5rb9w.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="hag01gbkb"/><path class="t03dh6bfh"/><path class="ku2x5rb9w wm-shine"/><path class="ug799plhe wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-video",
	});
}

export default Component;
