import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cjlnqmbsm.css';
import '../../css/e/ertd60wwo.css';
import '../../css/b/b7i_kkbbz.css';
import '../../css/l/l22tp1dfe.css';
import '../../css/z/zuy5aycbn.css';
import '../../css/y/ys8gh6bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cjlnqmbsm"/><path class="ertd60wwo wm-k"/><path class="b7i_kkbbz wm-k"/><path class="l22tp1dfe wm-a"/><path class="wm-s zuy5aycbn"/><path class="wm-s ys8gh6bye"/></g>`,
		"fallback": "withicons:battery-charging-sketch",
	});
}

export default Component;
