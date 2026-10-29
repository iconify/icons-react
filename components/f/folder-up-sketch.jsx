import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/arvvodb9x.css';
import '../../css/j/jfegy5qom.css';
import '../../css/u/u-utrpgcn.css';
import '../../css/b/bg9_r-b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="arvvodb9x"/><path class="jfegy5qom wm-a"/><path class="u-utrpgcn wm-k"/><path class="bg9_r-b3k wm-a"/></g>`,
		"fallback": "withicons:folder-up-sketch",
	});
}

export default Component;
