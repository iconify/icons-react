import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/k/khig2wbxg.css';
import '../../css/j/jx88zhb1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path clip-rule="evenodd" class="khig2wbxg"/><path class="jx88zhb1b"/></g>`,
		"fallback": "icon-park:drop-shadow-up",
	});
}

export default Component;
