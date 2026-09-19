import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-6w6s5mn.css';
import '../../css/z/zpv0px87x.css';
import '../../css/h/hvoz6u48w.css';
import '../../css/g/gzz6--gdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f-6w6s5mn"/><path class="zpv0px87x"/><path class="hvoz6u48w"/><path class="gzz6--gdm"/></g>`,
		"fallback": "icon-park-outline:background-color",
	});
}

export default Component;
