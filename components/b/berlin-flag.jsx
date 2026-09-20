import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wncu4ybwr.css';
import '../../css/y/y_r37oo7m.css';
import '../../css/o/o7-xvcqli.css';
import '../../css/s/s1qust7sm.css';
import '../../css/t/t4lfoz-jz.css';
import '../../css/b/bi-b5piod.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wncu4ybwr"/><path class="y_r37oo7m"/><g class="o7-xvcqli"><path class="s1qust7sm"/><path class="t4lfoz-jz"/><path clip-rule="evenodd" class="bi-b5piod"/></g>`,
		"fallback": "openmoji:berlin-flag",
	});
}

export default Component;
