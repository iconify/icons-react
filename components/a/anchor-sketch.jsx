import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-89ex_1l.css';
import '../../css/o/o_89d8juo.css';
import '../../css/m/mqioy1r3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u-89ex_1l wm-k"/><path class="o_89d8juo wm-k"/><path class="mqioy1r3z wm-a"/></g>`,
		"fallback": "withicons:anchor-sketch",
	});
}

export default Component;
