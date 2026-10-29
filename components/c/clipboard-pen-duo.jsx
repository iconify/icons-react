import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mefryhuto.css';
import '../../css/x/xlm5w-bhh.css';
import '../../css/j/j10ehyblf.css';
import '../../css/j/jljkj-bjl.css';
import '../../css/p/p88jhsbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mefryhuto"/><path class="wm-s xlm5w-bhh"/><path class="j10ehyblf wm-s"/><path class="jljkj-bjl"/><path class="p88jhsbpe wm-a"/></g>`,
		"fallback": "withicons:clipboard-pen-duo",
	});
}

export default Component;
