import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pof-48b5b.css';
import '../../css/j/je9239bfw.css';
import '../../css/t/t-nw4xpov.css';
import '../../css/m/mtrv0mdwe.css';
import '../../css/b/bipz22vit.css';
import '../../css/m/mf5ziac3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pof-48b5b"/><path class="je9239bfw wm-k"/><path class="t-nw4xpov wm-k"/><path class="mtrv0mdwe wm-k"/><path class="bipz22vit wm-a"/><path class="mf5ziac3q wm-a"/></g>`,
		"fallback": "withicons:dental-chair-sketch",
	});
}

export default Component;
