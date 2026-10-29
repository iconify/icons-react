import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f3ro08kee.css';
import '../../css/n/n4g9u7rzq.css';
import '../../css/g/g0y139bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f3ro08kee wm-a"/><path class="n4g9u7rzq wm-k"/><path class="g0y139bsq wm-a"/></g>`,
		"fallback": "withicons:binary-sketch",
	});
}

export default Component;
